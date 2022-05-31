import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { GeneraleService } from 'src/app/services/generale.service'
import { tap } from 'rxjs/operators'
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
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
  ) {
  }

  ngOnInit(): void {
    this.generaleService
      .getTopArticles()
      .pipe(
        tap((res: any) => {
          if (res.data.session_id == null) {
            this.generaleService.makeSession().subscribe((res) => {
              // console.log('makeSession', res)
            })
          }
        }),
      ).subscribe((res) => this.topArticles$.next(res.data.topArticles))
  }
}
