import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-description',
  templateUrl: './article-description.component.html',
  styleUrls: ['./article-description.component.scss']
})
export class ArticleDescriptionComponent implements OnInit {
  @Input('articleDesc') articleDesc:any;
  @Input('articleLabel') articleLabel:any;
  test = `<p class="h2" style="color:red">
  This paragraph has multiple lines.
  <em>But</em> HTML reduces them to a single line,
  omitting the carriage return we have used.
</p>



<p>
  This paragraph has multiple spaces.
  But HTML reduces them all to a single
  space, omitting the extra spaces and line we have used.
</p>`
  constructor() { }

  ngOnInit(): void {
  }

}
