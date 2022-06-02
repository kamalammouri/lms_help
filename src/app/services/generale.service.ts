import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators'
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
  increment = new BehaviorSubject<boolean>(false)
  activeLanguage = new BehaviorSubject<string>(null)
  fristArticle = new BehaviorSubject<string>(null)
  changeLanguage: Observable<string>
  constructor(
    private router: Router,
    public translate: TranslateService,
    private httpClient: HttpClient,
  ) {
    translate.addLangs(this.langs)

    this.changeLanguage = this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      switchMap((event: any) => of(event.snapshot.params['lg'])),
      // distinctUntilChanged(),
      tap((lng: any) => (lng && this.langs.includes(lng) ? lng : 'fr')),
    )

    this.changeLanguage.subscribe((lng) => {
      translate.setDefaultLang(lng)
      this.activeLanguage.next(lng)
    })

    this.activeLanguage
      .pipe(
        distinctUntilChanged(),
        filter((res: any) => res != null),
      )
      .subscribe((lg: string) => {
        let _url: any = this.router.url.split('/')
        if (_url.length >= 2 && this.langs.includes(_url[1])) {
          _url[1] = lg
        } else {
          _url[1] = 'fr'
        }
        // console.log('_url',_url);
        _url = _url.join('/')
        this.router.navigateByUrl(_url)
      })
  }

  getTopArticles(lg: string):Observable<any> {
    return this.httpClient.get<any>('/api/lmshelp/' + lg + '/topArticles')
  }

  getArticleChilde(lg: string, code: string):any {
    let artilceUrl = this.increment.getValue() ? '/api/lmshelp/' + lg + '/getArticle/' + code + '/' + this.increment.getValue() : '/api/lmshelp/' + lg + '/getArticle/' + code
    console.log(artilceUrl);
    
    return this.httpClient.get<any>(artilceUrl) && this.increment.next(false)
  }

  makeSession() {
    return this.httpClient.get('/api/lmshelp/createSession')
  }
}
