import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneraleService } from './services/generale.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helplms';

    
  constructor(
    public translate: TranslateService,
    private generaleService:GeneraleService
  ){
    // Register translation languages
    translate.addLangs(['en', 'es', 'fr']);
    // Set default language
    translate.setDefaultLang('fr');
  } 

}

