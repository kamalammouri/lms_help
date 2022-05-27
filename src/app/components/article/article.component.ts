import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { GeneraleService } from 'src/app/services/generale.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  // routeParams:any = this.activeRoute.params; 
  topArticles$ = new BehaviorSubject<any>([])
  activeLg$ = this.generaleService.activeLanguage; ;
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
  ) {
    // console.log('routeParams', this.routeParams.getValue().id);
    
    /* generaleService
      .getTopArticles()
      .subscribe((res) => this.topArticles$.next(res)) */
      this.topArticles$.next([1,23,5,4])
  }

  ngOnInit(): void {}
}
