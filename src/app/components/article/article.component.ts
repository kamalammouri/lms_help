import { Component, OnInit, SimpleChanges } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { GeneraleService } from 'src/app/services/generale.service'
import { filter, take, tap,distinctUntilChanged } from 'rxjs/operators'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  // routeParams:any = this.activeRoute.params;
  topArticles$ = new BehaviorSubject<any>([])
  activeLg$ = this.generaleService.activeLanguage
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
  ) {}

  ngOnInit(): void {
    this.generaleService.activeLanguage.subscribe((lang: string) => {
      this.generaleService
        .getTopArticles(lang)
        .pipe(
          distinctUntilChanged(),
          filter((res: any) => res?.data != null),
          tap((res: any) => { 
            if (res.data.session_id == null) this.generaleService.makeSession();
          }),
        )
        .subscribe((res:any) => {
          this.topArticles$.next(res.data.topArticles)
          this.generaleService.fristArticle.next(res.data.topArticles[0]?.code)
        })
    })
  }
}
