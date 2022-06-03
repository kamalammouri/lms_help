import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { tap, distinctUntilChanged, filter } from 'rxjs/operators'
import { ApiService } from 'src/app/services/api.service'
import { GeneraleService } from 'src/app/services/generale.service'
import { SatisfactionComponent } from '../satisfaction/satisfaction.component'
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  routeParams: any
  articleId_: string
  lng_: string
  langs = ['en', 'de', 'fr']
  article: any = {}
  subLang$: Subscription
  subParams$: Subscription
  @ViewChild('satisfactionComp') satisfactionComp: SatisfactionComponent
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.subParams$ = this.generaleService.articleId
      .pipe(
        distinctUntilChanged(),
        tap((id: any) => {
          console.log('articleId', id)

          id == null
            ? this.generaleService.fristArticle
                .pipe(
                  distinctUntilChanged(),
                  filter((res) => res != null || res != undefined),
                )
                .subscribe((res) => {
                  this.apiService.increment.next(true)
                  this.router.navigateByUrl(this.router.url + '/' + res)
                })
            : null
        }),
        filter((id: any) => id != null || id != undefined),
      )
      .subscribe((id: any) => {
        this.articleId_ = id
        this.getArticles(this.lng_, id)
      })

    this.subLang$ = this.generaleService.activeLanguage.pipe(
      distinctUntilChanged(),
      filter((res) => res != null || res != undefined),
    ).subscribe(
      (lng: any) => {
        this.article = {}
        this.satisfactionComp?.inistialize()
        this.lng_ = lng
        this.getArticles(lng, this.articleId_)
      },
    )
  }

  getArticles(lng: string, id: string) {
    lng && id
      ? this.apiService
          .getArticleChilde(lng, id)
          .subscribe((childs: any) => {
            this.article = childs.data
            this.apiService.increment.next(false)
          })
      : null
  }

  ngOnDestroy() {
    this.subLang$.unsubscribe()
    this.subParams$.unsubscribe()
  }
}