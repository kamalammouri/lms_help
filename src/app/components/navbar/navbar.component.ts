import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneraleService } from 'src/app/services/generale.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    //input lungage change
  @Output() languageChange = new EventEmitter<string>();

  constructor(
    public translate: TranslateService,
    private generaleService:GeneraleService) { }

  ngOnInit(): void {
  }

  changeLanguage(language: string): void {
    // console.log('language',language);
    this.generaleService.changeLanguage.next(language);
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
    console.log('language',lang);
  }
}
