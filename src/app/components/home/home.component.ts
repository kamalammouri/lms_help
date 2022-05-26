import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneraleService } from 'src/app/services/generale.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routeParams: any = {};
  queryParams:any = {};
  subQueryparams: Subscription
  constructor(
    private activeRoute: ActivatedRoute,
    private generaleService:GeneraleService,
    ) {
      // this.activeRoute.params.subscribe((res:any) => {
      //   if(res){
      //     this.routeParams=res;
      //     if(this.langs.includes(res.lg)){
      //       this.generaleService.translateLanguageTo(res.lg);
      //     }else{
      //       this.generaleService.translateLanguageTo('fr',true);
      //     }
      //   }
      // });
      this.subQueryparams = this.activeRoute.queryParams.pipe(filter((query:any) => query.q != null)).subscribe(res => this.queryParams=res);
    }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.subQueryparams.unsubscribe();
  }

}
