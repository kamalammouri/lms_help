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
    private generaleService:GeneraleService,
    private activeRoute:ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.satisfyed = null;
    // console.log('articleId',this.articleId);
    
  }

  review(rep:boolean){
    this.satisfyed = rep;
    let data = {
      article_id:this.articleId,
    }
    // this.generaleService.saveSatisfaction().subscribe()
  }

  inistialize(){
    this.ngOnInit();
    
  }

}
