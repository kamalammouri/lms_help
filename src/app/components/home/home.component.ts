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
  langs=['en', 'de', 'fr'];
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService:GeneraleService) {
     }

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
    this.activeRoute.queryParams.subscribe(res => this.queryParams=res);
  }

  ngOnDestroy() {
  }
}
