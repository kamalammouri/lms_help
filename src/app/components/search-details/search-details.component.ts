import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { GeneraleService } from 'src/app/services/generale.service'
import { Subscription,of } from 'rxjs'
import { filter, distinctUntilChanged, catchError } from 'rxjs/operators'
import { ApiService } from 'src/app/services/api.service'
import { HotToastService } from '@ngneat/hot-toast'

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss'],
})
export class SearchDetailsComponent implements OnInit, OnDestroy {
  data:any;
  activeLg: string
  queryParams: any = {}
  subQueryparams$: Subscription
  subLang$: Subscription
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

  getData(lg: string, query: string, filter?: string) {
    let data = {
      lang: lg,
      query: query,
      filter: filter,
    }
    // console.log(data)
    this.apiService
      .search(data)
      .pipe(
        distinctUntilChanged(),
        this.toast.observe(
          {
            loading: 'Searching...',
            success: (s) => 'I got a response: ' + s,
            error: (e) => 'Something did not work, reason: ' + e.message,
          }
        ),
        catchError((error) => of(error))
      )
      .subscribe((res: any) => {
        console.log(res);
        this.data = res;
      })
  }

  ngOnDestroy() {
    this.subQueryparams$.unsubscribe()
    this.subLang$.unsubscribe()
  }
}
