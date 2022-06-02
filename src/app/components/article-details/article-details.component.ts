import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { tap, distinctUntilChanged, filter } from 'rxjs/operators'
import { GeneraleService } from 'src/app/services/generale.service'
import { SatisfactionComponent } from '../satisfaction/satisfaction.component'
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  articleId: any
  langs = ['en', 'de', 'fr']
  article: any = {}
  subLang$: Subscription
  subParams$: Subscription
  @ViewChild('satisfactionComp') satisfactionComp: SatisfactionComponent
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
  ) {}

  ngOnInit(): void {
    // this.generaleService.changeUrl.subscribe((res: any) => {
    //   console.log('resUrl', res);

    // });
    // this.subParams$ = this.activeRoute.params
    //   .pipe(
    //     distinctUntilChanged(),
    //     tap((params: any) =>
    //       params.id == null
    //         ? this.generaleService.fristArticle
    //             .pipe(
    //               distinctUntilChanged(),
    //               filter((res) => res != null),
    //             )
    //             .subscribe((res) => {
    //               this.generaleService.increment.next(true)
    //               this.router.navigateByUrl(this.router.url + '/' + res)
    //             })
    //         : null,
    //     ),
    //     filter((params: any) => params?.id != null || params?.id != undefined),
    //   )
    //   .subscribe((params: any) => (this.routeParams = params))

    this.subParams$ = this.generaleService.articleId
      .pipe(
        distinctUntilChanged(),
        tap((id: any) =>
          {
            console.log('articleId', id)
            
            id == null
            ? this.generaleService.fristArticle
                .pipe(
                  distinctUntilChanged(),
                  filter((res) => res != null),
                )
                .subscribe((res) => {
                  this.generaleService.increment.next(true)
                  this.router.navigateByUrl(this.router.url + '/' + res)
                })
            : null}
        ),
        filter((id: any) => id != null || id != undefined),
      )
      .subscribe((id: any) => (this.articleId = id))

    this.subLang$ = this.generaleService.activeLanguage.subscribe(
      (lng: any) => {
        this.article = {}
        this.satisfactionComp?.inistialize()

        if (this.articleId)
          this.generaleService
            .getArticleChilde(lng, this.articleId)
            .subscribe((childs: any) => {
              this.article = childs.data
              this.generaleService.increment.next(false)
            })
      },
    )
  }

  ngOnDestroy() {
    // this.subLang$.unsubscribe()
    // this.subParams$.unsubscribe()
  }
}
