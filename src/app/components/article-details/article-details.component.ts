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
  fristArticle:any;
  @ViewChild('satisfactionComp') satisfactionComp:SatisfactionComponent;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
  ) {
    
  }

  ngOnInit(): void {
    this.activeRoute.params
    .pipe( 
      distinctUntilChanged(),
      tap((params: any) => params.id == null ? this.generaleService.fristArticle.pipe( distinctUntilChanged(), filter(res => res!=null)).subscribe((res) => this.router.navigateByUrl(this.router.url+'/'+res)) : null),
      filter(params => params?.id != null || params?.id != undefined)
      )
    .subscribe((params:any) => this.routeParams = params);

    this.generaleService.activeLanguage.subscribe((res) => {
      this.article={};
      this.satisfactionComp?.inistialize();
      if(this.routeParams?.id) this.generaleService.getArticleChilde(res, this.routeParams.id).subscribe((res: any) => (this.article = res.data));
    })

  }
}
