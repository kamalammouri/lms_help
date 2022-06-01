import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { tap,distinctUntilChanged,filter } from 'rxjs/operators'
import { GeneraleService } from 'src/app/services/generale.service'
import { SatisfactionComponent } from '../satisfaction/satisfaction.component'
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  routeParams: any
  langs = ['en', 'de', 'fr']
  article: any = {}
  @ViewChild('satisfaction') satisfaction:SatisfactionComponent;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
  ) {
    this.activeRoute.params
      .pipe(
      ).subscribe((params:any) => {
        this.routeParams = params
      })

    let lg: string
    this.generaleService.activeLanguage.subscribe((res) => {
      this.article={};
      this.satisfaction?.inistialize();
      this.generaleService
        .getArticleChilde(res, this.routeParams.id)
        .subscribe((res: any) => (this.article = res.data));

    })
  }

  ngOnInit(): void {
    // console.log('routeParams',this.routeParams.getValue().id);
  }
}
