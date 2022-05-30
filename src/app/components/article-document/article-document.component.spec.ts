import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDocumentComponent } from './article-document.component';

describe('ArticleDocumentComponent', () => {
  let component: ArticleDocumentComponent;
  let fixture: ComponentFixture<ArticleDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
