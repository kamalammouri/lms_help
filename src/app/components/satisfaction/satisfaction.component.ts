import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneraleService } from 'src/app/services/generale.service';

@Component({
  selector: 'app-satisfaction',
  templateUrl: './satisfaction.component.html',
  styleUrls: ['./satisfaction.component.scss']
})
export class SatisfactionComponent implements OnInit {
  satisfyed:boolean;
  @Input('articleId') articleId:string;
  constructor(
    generaleService:GeneraleService,
    activeRoute:ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.satisfyed = null;
    // console.log('articleId',this.articleId);
    
  }

  review(rep:boolean){
    this.satisfyed = rep;
  }

  inistialize(){
    this.ngOnInit();
    
  }

}
