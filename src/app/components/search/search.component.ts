import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators'
import { GeneraleService } from 'src/app/services/generale.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  queryParams: any = {}
  searchTerm$ = new BehaviorSubject<string|null>(null)
  subQueryparams: Subscription
  subSearch: Subscription
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private router: Router,
  ) {
    this.subQueryparams = this.activeRoute.queryParams
      .pipe(
        filter((res: any) => res.q != undefined || res.f != undefined),
        distinctUntilChanged((prev: any, cur: any) => prev.q === cur.q),
      )
      .subscribe((res) => {
        if (res.q == '') {
          this.router.navigate(['/'])
        }else{
          this.searchTerm$.next(res.q)
        }
      })

    this.subSearch = this.searchTerm$
      .pipe(
        filter(text => text != null),
        debounceTime(500), 
        distinctUntilChanged())
      .subscribe((text) => {
        let lg = this.generaleService.activeLanguage.getValue();
        if (text != '') {
          this.router.navigate(['/' + lg + '/search'], {
            queryParams: { q: text } ,
            queryParamsHandling: 'merge',
          })
        } else this.router.navigate(['/' + lg + '/article'])
      })
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subQueryparams.unsubscribe()
    this.subSearch.unsubscribe()
  }
}
