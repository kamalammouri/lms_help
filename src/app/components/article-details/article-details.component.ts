import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneraleService } from 'src/app/services/generale.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  routeParams: any = {};
  queryParams:any = {};
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private generaleService:GeneraleService)  { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(res => this.routeParams=res);
    console.log('routeParam',this.routeParams);
    
    this.generaleService.activeLanguage.next(this.routeParams.lg);
    this.generaleService.translateLanguageTo(this.routeParams.lg);
  }

}
