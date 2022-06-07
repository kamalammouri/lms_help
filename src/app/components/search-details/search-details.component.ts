import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { GeneraleService } from 'src/app/services/generale.service'
import { Subscription, of, BehaviorSubject, combineLatestWith } from 'rxjs'
import {
  filter,
  distinctUntilChanged,
  catchError,
  tap,
  map,
} from 'rxjs/operators'
import { ApiService } from 'src/app/services/api.service'
import { HotToastService } from '@ngneat/hot-toast'

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss'],
})
export class SearchDetailsComponent implements OnInit, OnDestroy {
  result: any
  activeLg: string
  queryParams: any = {}
  subQueryparams$ = this.activeRoute.queryParams
  subLang$ = this.generaleService.activeLanguage
  subData$: Subscription
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private apiService: ApiService,
    private toast: HotToastService,
  ) {
      this.subQueryparams$.pipe(
        combineLatestWith(this.subLang$),
        filter(([query,lang]) =>( query?.['q'] != null || query?.['q'] != undefined) && (lang != null || lang != undefined)),
        distinctUntilChanged(([queryPrev,langPrev]: any, [queryCur,langCur]: any) => queryPrev === queryCur && langPrev === langCur),
        )
      .subscribe(([query,lang]) => {
        this.getData(lang, query?.q, query?.f)
      })
  }

  ngOnInit(): void {}

  getData(lg: string, query: string, filtr: string = null) {
    // console.log('getData', lg, query, filtr);
    filtr = filtr ? '/' + filtr : ''
    let data: string = lg + '/' + query + filtr
    console.log('data', data);
    // const loading = this.toast.loading('Loading...', { id: 'loading' })
    if (this.subData$ != null) this.subData$.unsubscribe()
    this.subData$ = this.apiService
      .search(data)
      .pipe(
        distinctUntilChanged(),
        catchError((error) => of(error)),
        map((res: any) => res.data.es_supportHelp),
      )
      .subscribe(
        (res: any) => {
          this.result = res
        }
      )
  }

  ngOnDestroy() {
    this.subLang$.unsubscribe()
    this.subData$.unsubscribe()
  }
}
