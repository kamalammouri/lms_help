import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneraleService } from 'src/app/services/generale.service';
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  routeParams: any = {};
  queryParams:any = {};
  langs=['en', 'de', 'fr'];
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService:GeneraleService)  { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res:any) => {
      if(res){
        this.routeParams=res;
        if(this.langs.includes(res.lg)){
          this.generaleService.translateLanguageTo(res.lg);
        }else{
          this.generaleService.translateLanguageTo('fr',true);
        }
      }
    });

  }

}
