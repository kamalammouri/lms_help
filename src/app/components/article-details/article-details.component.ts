import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { tap } from 'rxjs/operators'
import { GeneraleService } from 'src/app/services/generale.service'
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  routeParams: any
  langs = ['en', 'de', 'fr']
  article:any=[];
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
  ) {
    this.activeRoute.params.pipe(
      // tap((res:any) => { 
      //   if(Object.keys(res).length<=1){
      //     res.lg && this.langs.includes(res.lg)?this.router.navigateByUrl('/'+res.lg+'/article/2'):this.router.navigateByUrl('/fr/article/2')
      //   }
      // })
    ).subscribe((params) => {
      this.routeParams = params
    })

    this.generaleService.getArticleChilde(this.routeParams.id).subscribe((res:any) => {
      this.article = res.data
      console.log('article',this.article);
    });
  }

  ngOnInit(): void {
    // console.log('routeParams',this.routeParams.getValue().id);
  }
}
