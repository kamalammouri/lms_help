import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GeneraleService {

  activeLanguage = new BehaviorSubject<string>('');
  routeParams:any = new BehaviorSubject<any>(null);
  navigateTo:any = null;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private location: Location
    ) { 
    }

//http://localhost:4200/fr/search?q=mot_de_pass&f=video
  
translateLanguageTo(lang: string,redirectTo:boolean=false) {  
  this.translate.use(lang); 
  if(redirectTo){
    this.activeLanguage.next(lang);
    this.navigateTo = this.router.url.split('/');
    this.navigateTo[1] = lang;
    this.router.navigateByUrl(this.navigateTo.join('/'));
  }
  
  // console.log(this.navigateTo.join('/'));
  }
}
