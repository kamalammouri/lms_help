import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    public translate: TranslateService,
    private generaleService:GeneraleService) {
      this.activatedRoute.queryParamMap.subscribe((params:any) => {
        if ('langue' in params.params && 'filter' in params.params ){
          this.generaleService.routeParams.next(params.params);
          console.log('routeParams',params.params);
        }else{
          console.log('not langue Params !!!');
        }
      });
     }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }
}
