import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, Subscription } from 'rxjs'
import { GeneraleService } from 'src/app/services/generale.service'
import { filter, take, tap, distinctUntilChanged, map } from 'rxjs/operators'
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
  subLang$:Subscription;
  // subService$: Subscription
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.subLang$ = this.generaleService.activeLanguage.pipe(distinctUntilChanged(),filter((lang:any)=>lang)).subscribe((lang: string) => {
      this.topArticles$.next([]);
      this.apiService
        .getTopArticles(lang)
        .pipe(
          filter((res: any) => res?.data?.topArticles?.length > 0),
          tap((res: any) => {
            if (res.data.session_id == null) this.apiService.makeSession()
          }),
          map((res: any) => res.data.topArticles),
        )
        .subscribe((topArtcile: any) => {
          this.topArticles$.next(topArtcile)
          this.apiService.increment.next(true)
          this.generaleService.fristArticle.next(topArtcile[0]?.code);
        })
    })
  }

  ngOnDestroy() {
    // this.subService$.unsubscribe()
    // this.subLang$.unsubscribe()
  }
}
