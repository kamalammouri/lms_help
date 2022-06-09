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
  isSearching:boolean = false;
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
    this.generaleService.searchSpinner.subscribe( (res: boolean) => this.isSearching = res);
    this.subQueryparams = this.activeRoute.queryParams
      .pipe(
        tap((res: any) => {
          if (res.q == undefined) this.searchTerm$.next(null)
        }),
        filter((res: any) => res.q != undefined || res.q != null),
        // distinctUntilChanged((prev: any, cur: any) => prev.q === cur.q),
      )
      .subscribe((res: any) => {
        this.searchTerm$.next(res.q)
      })

    this.searchTerm$
      .pipe(
        filter((text) => text != null),
        distinctUntilChanged(),
        debounceTime(800),
      )
      .subscribe({
        next: (text) => {
          let lg = this.generaleService.activeLanguage.getValue()
          if (text != '') {
            this.generaleService.searchSpinner.next(true)
            this.router.navigate(['/' + lg + '/search'], {
              queryParams: { q: text },
              queryParamsHandling: 'merge',
            })
          }
          if (text == '') {
            this.router.navigate([
              '/' +
                lg +
                '/article/' +
                this.generaleService.fristArticle.getValue(),
            ])
          }
        }
      })
  }
  ngOnDestroy() {
    this.subQueryparams.unsubscribe()
    // this.subSearch.unsubscribe()
  }
}
