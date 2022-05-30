import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneraleService } from 'src/app/services/generale.service';
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  routeParams:any ; 
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService:GeneraleService)  { 
      this.activeRoute.params.subscribe(params => {
        this.routeParams=params;
      });
    }

  ngOnInit(): void {
    // console.log('routeParams',this.routeParams.getValue().id);
  }

}
