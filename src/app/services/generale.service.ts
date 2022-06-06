import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { distinctUntilChanged, filter, switchMap, tap,map } from 'rxjs/operators'
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class GeneraleService {
  langs = ['en', 'de', 'fr']
  

  activeLanguage = new BehaviorSubject<string>(null)
  fristArticle = new BehaviorSubject<string>(null)
  changeLanguage: Observable<string>
  changeUrl: Observable<{ lng: string; id?: string }>
  articleId = new BehaviorSubject<string>(null)
  // changeUrl= new BehaviorSubject<string>(null)
  constructor(
    private router: Router,
    public translate: TranslateService,

  ) {
    translate.addLangs(this.langs)
    // this.changeLanguage.subscribe(res=> this.changeUrl.next(res))

    this.changeUrl = this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      distinctUntilChanged(
        (prev: any, next: any) =>
          prev.snapshot.params['lg'] == next.snapshot.params['lg'] && prev.snapshot.params['id'] == next.snapshot.params['id'] 
      ),
      map((event: any) => { return{
          lng: event.snapshot.params['lg'],
          id: event.snapshot.params['id'] ?? null,
        }},
      ),
      tap((res: any) => {
        return {
          ...res,
          lng: res.lng && this.langs.includes(res.lng) ? res.lng : 'fr',
        }
      }),
    )

    this.changeUrl.subscribe(({ lng, id }) => {  
      translate.setDefaultLang(lng)
      this.activeLanguage.next(lng)
      if(id) this.articleId.next(id)
    })

    
    this.activeLanguage.pipe(distinctUntilChanged()).subscribe((lg: string) => {
      let _url: any = this.router.url.split('/')
      if (_url.length >= 2 && this.langs.includes(_url[1])) {
        _url[1] = lg
        _url = _url.join('/')
        this.router.navigateByUrl(_url)
      }
    })
  }


}