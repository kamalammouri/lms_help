import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-video',
  templateUrl: './article-video.component.html',
  styleUrls: ['./article-video.component.scss']
})
export class ArticleVideoComponent implements OnInit {
  @Input('articleVideo') articleVideo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
