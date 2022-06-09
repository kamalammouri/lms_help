import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import {
  tap,
  distinctUntilChanged,
  filter,
  combineLatestWith,
} from 'rxjs/operators'
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
  subLang$ = this.generaleService.activeLanguage
  subNav$ : Subscription;
  @ViewChild('satisfactionComp') satisfactionComp: SatisfactionComponent
  constructor(
    private router: Router,
    private generaleService: GeneraleService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.subNav$ = this.generaleService.navigToFirstArticle.pipe(distinctUntilChanged()).subscribe((res) => {
      if (res) this.navigateToFirstArticle()
    })

    this.generaleService.articleId
      .pipe(
        combineLatestWith(this.subLang$),
        filter( ([id,lang]:any) => id!=null && lang!=null),
        distinctUntilChanged((prev:any,curr:any) => prev[0] == curr[0] && prev[1] == curr[1]),
        tap(res => console.log('secondTap',res)),
      )
      .subscribe(([id, lang]) => {
        this.articleId_ = id;
        this.article = {}
        this.satisfactionComp?.inistialize()
        this.getArticles(lang, id)
      })
  }

  getArticles(lng: string, id: string) {
    this.apiService.getArticleChilde(lng, id).subscribe((childs: any) => {
      this.article = childs.data
      this.apiService.increment.next(false)
    })
  }

  navigateToFirstArticle() {
    this.generaleService.fristArticle
      .pipe(
        filter((firstId:any) => firstId),
        distinctUntilChanged(),
      )
      .subscribe((firstId) => {
        this.router.navigateByUrl(this.router.url + '/' + firstId)
      })
  }

  ngOnDestroy() {
    //   this.subLang$.unsubscribe()
    //   this.subParams$.unsubscribe()
    this.subNav$.unsubscribe()
  }
}
