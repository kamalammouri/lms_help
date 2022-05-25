import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeneraleService } from 'src/app/services/generale.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeLg:string='';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private activeRoute: ActivatedRoute,
    public translate: TranslateService,
    private generaleService:GeneraleService,
    ) { 
      
    }

  ngOnInit(): void { 
    this.generaleService.activeLanguage.subscribe(lang => {
      this.activeLg = lang;
    });
  }
  
  translateLanguageTo(lang: string) {
    this.generaleService.translateLanguageTo(lang,true);
  }
}
