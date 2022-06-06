import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, Subscription } from 'rxjs'
import { GeneraleService } from 'src/app/services/generale.service'
import { filter, take, tap, distinctUntilChanged } from 'rxjs/operators'
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  // routeParams:any = this.activeRoute.params;
  topArticles$ = new BehaviorSubject<any>([])
  activeLg$ = this.generaleService.activeLanguage
  subLang$: Subscription
  subService$: Subscription
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.subLang$ = this.generaleService.activeLanguage
      .pipe(
        // filter(res=>res!=null),
        distinctUntilChanged(),
      )
      .subscribe((lang: string) => {
        this.topArticles$.next([])
        this.apiService
          .getTopArticles(lang)
          .pipe(
            tap((res: any) => console.log(res)),
            filter((res: any) => res?.data?.topArticles?.length > 0),
            tap((res: any) => {
              if (res.data.session_id == null) this.apiService.makeSession()
            }),
          )
          .subscribe((res: any) => {
            this.topArticles$.next(res.data.topArticles)
            this.generaleService.fristArticle.next(
              res.data.topArticles[0]?.code,
            )
          })
      })
  }

  ngOnDestroy() {
    this.subLang$.unsubscribe()
  }
}
