import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { GeneraleService } from 'src/app/services/generale.service'
import { Subscription, of } from 'rxjs'
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
  subQueryparams$: Subscription
  subLang$: Subscription
  subData$: Subscription
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private apiService: ApiService,
    private toast: HotToastService,
  ) {
    this.subLang$ = this.generaleService.activeLanguage
      .pipe(
        distinctUntilChanged(),
        filter((lg: any) => lg != null || lg != undefined),
      )
      .subscribe((lng: string) => {
        this.activeLg = lng
        if (this.queryParams)
          this.getData(lng, this.queryParams?.q, this.queryParams?.f)
      })

    this.subQueryparams$ = this.activeRoute.queryParams
      .pipe(
        distinctUntilChanged(),
        filter((query: any) => query.q != null || query.q != undefined),
      )
      .subscribe((res) => {
        this.queryParams = res
        if (this.activeLg) this.getData(this.activeLg, res?.q, res?.f)
      })
  }

  ngOnInit(): void {}

  getData(lg: string, query: string, filtr: string = null) {
    filtr = filtr ? '/' + filtr : ''
    let data: string = lg + '/' + query + filtr
    const loading = this.toast.loading('Loading...', { id: 'loading' })
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
        },
        (err: any) => {},
        () => {
          loading.close()
        },
      )
  }

  ngOnDestroy() {
    this.subQueryparams$.unsubscribe()
    this.subLang$.unsubscribe()
  }
}
