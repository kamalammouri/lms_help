import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { GeneraleService } from 'src/app/services/generale.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routeParams: any = {};
  queryParams:any = {};
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService:GeneraleService) {
     }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(res => this.routeParams=res);
    this.activeRoute.queryParams.subscribe(res => this.queryParams=res);
    
    this.generaleService.activeLanguage.next(this.routeParams.lg);
    this.generaleService.translateLanguageTo(this.routeParams.lg);
  }

  ngOnDestroy() {
  }
}
