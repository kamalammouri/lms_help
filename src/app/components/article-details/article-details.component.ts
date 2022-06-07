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
  subFirstArt$: Subscription
  @ViewChild('satisfactionComp') satisfactionComp: SatisfactionComponent
  constructor(
    private router: Router,
    private generaleService: GeneraleService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    if (this.subFirstArt$ != null) this.subFirstArt$?.unsubscribe()
    this.subParams$ = this.generaleService.articleId
      .pipe(
        distinctUntilChanged((prev,cur)=>prev==cur),
        tap((id: any) => {
          console.log('articleId', id)

          // id == null
          //   ? (this.subFirstArt$ = this.generaleService.fristArticle
          //       .pipe(filter((fristID) => fristID != null))
          //       .subscribe((fristID) => {
          //         this.apiService.increment.next(true)
          //         this.router.navigateByUrl(this.router.url + '/' + fristID)
          //       }))
          //   : id
        }),
        filter((id: any) => id != null || id != undefined),
      )
      .subscribe((id: any) => {
        console.log('article iiiiid', id)
        this.article = {}
        this.satisfactionComp?.inistialize()
        this.articleId_ = id
        this.getArticles(this.lng_, id)
      })

    this.subLang$ = this.generaleService.activeLanguage
      .pipe(
        distinctUntilChanged(),
        filter((res) => res != null || res != undefined),
      )
      .subscribe((lng: any) => {
        this.article = {}
        this.satisfactionComp?.inistialize()
        this.lng_ = lng
        this.getArticles(lng, this.articleId_)
      })
  }

  getArticles(lng: string, id: string) {
    lng && id
      ? this.apiService.getArticleChilde(lng, id).subscribe((childs: any) => {
          this.article = childs.data
          console.log(this.article.label)

          this.apiService.increment.next(false)
        })
      : false
  }

  ngOnDestroy() {
    // this.subLang$.unsubscribe()
    // this.subParams$.unsubscribe()
  }
}
