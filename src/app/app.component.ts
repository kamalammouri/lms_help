import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeneraleService } from './services/generale.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helplms';

  constructor(
    public translate: TranslateService,
  ){
    // Register translation languages
    translate.addLangs(['en', 'de', 'fr']);
    // Set default language
    translate.setDefaultLang('fr');
  } 



}

