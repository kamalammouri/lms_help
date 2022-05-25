import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GeneraleService {

  activeLanguage = new BehaviorSubject<string>('fr');
  routeParams:any = new BehaviorSubject<any>(null);
  url:any;
  private _routeParams:any;
  constructor(
    public translate: TranslateService,
    private activatedRoute:ActivatedRoute,
    private location: Location
    ) {
    }
//http://localhost:4200/?langue=fr&filter=image,video
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
    this.activeLanguage.next(lang);
    // this.location.replaceState('home/'+lang);
    this.activatedRoute.url.subscribe((res:any) => {
      this.url=res
      console.log('url',res);
    });
  }
}
