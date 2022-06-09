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
  result: any = []
  haveResult: boolean = null
  searchValue: string
  searchFilter: string
  subQueryparams$: Subscription
  subLang$ = this.generaleService.activeLanguage
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private apiService: ApiService,
    private toast: HotToastService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subQueryparams$ = this.activeRoute.queryParams
      .pipe(
        combineLatestWith(this.subLang$),
        tap(([query, lang]) => {
          if (query?.['q'] == '') {
            this.router.navigate([
              '/' +
                lang +
                '/article/' +
                this.generaleService.fristArticle.getValue(),
            ])
            this.apiService.increment.next(true)
          }
        }),
        filter(
          ([query, lang]) =>
            (query?.['q'] != null || query?.['q'] != undefined) &&
            (lang != null || lang != undefined),
        ),
        distinctUntilChanged(
          ([queryPrev, langPrev]: any, [queryCur, langCur]: any) =>
            queryPrev === queryCur && langPrev === langCur,
        ),
      )
      .subscribe(([query, lang]) => {
        this.searchValue = query?.['q']
        this.searchFilter = query?.['f']
        this.getData(lang, query?.q, query?.f)
      })
  }

  getData(lg: string, query: string, filtr: string = null) {
    this.haveResult = true
    filtr = filtr ? '/' + filtr : ''
    let data: string = lg + '/' + query + filtr
    // console.log('data', data)
    // const loading = this.toast.loading('Loading...', { id: 'loading' })
    this.apiService
      .search(data)
      .pipe(
        distinctUntilChanged(),
        catchError((error) => of(error)),
        map((res: any) => res?.data?.es_supportHelp),
      )
      .subscribe({
        next: (res: any) => {
          this.result = res
          res && res?.total?.value > 0
            ? (this.haveResult = true)
            : (this.haveResult = false)
        },
        complete: () => {
          this.generaleService.searchSpinner.next(false)
        },
      })
  }

  // navigateTo(parentId:string){
  //   this.router.navigate(['/a'])
  // }

  ngOnDestroy() {
    this.subQueryparams$.unsubscribe()
  }
}
