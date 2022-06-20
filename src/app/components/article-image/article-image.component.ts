import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss']
})
export class ArticleImageComponent implements OnInit {
  @Input('articleImg') articleImg:any;
  constructor() { }

  ngOnInit(): void {
  }

}
