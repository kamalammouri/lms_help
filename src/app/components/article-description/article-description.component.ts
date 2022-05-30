import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-description',
  templateUrl: './article-description.component.html',
  styleUrls: ['./article-description.component.scss']
})
export class ArticleDescriptionComponent implements OnInit {
  @Input('articleDesc') articleDesc:any;
  constructor() { }

  ngOnInit(): void {
  }

}
