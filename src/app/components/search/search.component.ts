import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators'
import { GeneraleService } from 'src/app/services/generale.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  queryParams: any = {}
  searchTerm$ = new BehaviorSubject<string | null>(null)
  subQueryparams: Subscription
  subSearch: Subscription
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subQueryparams = this.activeRoute.queryParams
      .pipe(
        tap((res: any) => {
          if (res.q == undefined) this.searchTerm$.next('')
        }),
        filter((res: any) => res.q != undefined || res.q != null),
        // distinctUntilChanged((prev: any, cur: any) => prev.q === cur.q),
      )
      .subscribe((res: any) => {
        if (res.q == '') {
          // this.router.navigate(['/'])
          this.searchTerm$.next('')
        } else {
          this.searchTerm$.next(res.q)
        }
      })

    this.searchTerm$
      .pipe(
        filter((text) => text != null),
        distinctUntilChanged(),
        debounceTime(800),
      )
      .subscribe((text) => {
        // console.log('text',text);

        let lg = this.generaleService.activeLanguage.getValue()
        if (text != '') {
          this.router.navigate(['/' + lg + '/search'], {
            queryParams: { q: text },
            queryParamsHandling: 'merge',
          })
        } else {
          this.router.navigate(['/' +lg +'/article/' +this.generaleService.fristArticle.getValue()])
        }
      })
  }
  ngOnDestroy() {
    this.subQueryparams.unsubscribe()
    // this.subSearch.unsubscribe()
  }
}
