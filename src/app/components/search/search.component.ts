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
        filter((res: any) => res.q != undefined),
        distinctUntilChanged((prev: any, cur: any) => prev.q === cur.q),
      )
      .subscribe((res) => {
        if (res.q == '') {
          this.router.navigate(['/'])
        }else{
          // this.searchTerm$.next(res.q)
          this.searchTerm$.next(res);
        }
      })

    this.subSearch = this.searchTerm$
      .pipe(
        filter((quParms:any)=> quParms?.q != null),
        debounceTime(700), 
        distinctUntilChanged())
      .subscribe((quParms) => {
        let lg = this.generaleService.activeLanguage.getValue()
        if (quParms.q != '') {
          this.queryParams = quParms;
          this.router.navigate(['/' + lg + '/search'], {
            queryParams: { q : quParms?.q , f : quParms?.f },
          })
        } else this.router.navigate(['/' + lg + '/article'])
      })
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subQueryparams.unsubscribe()
    this.subSearch.unsubscribe()
  }

  onSearch(searchTerm: string) {
    let obj:any ={ q:searchTerm, f:''}  
    this.searchTerm$.next(obj);
  }
}
