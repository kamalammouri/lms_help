import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-document',
  templateUrl: './article-document.component.html',
  styleUrls: ['./article-document.component.scss']
})
export class ArticleDocumentComponent implements OnInit {
  @Input('articleDoc') articleDoc:any;
  constructor() { }

  ngOnInit(): void {
  }

}
