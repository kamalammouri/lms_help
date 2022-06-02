import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject, Observable, of, Subject } from 'rxjs'
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
  changeUrl: Observable<{ lng: string; id?: string }>
  articleId = new BehaviorSubject<string>(null)
  constructor(
    private router: Router,
    public translate: TranslateService,
    private httpClient: HttpClient,
  ) {
    translate.addLangs(this.langs)

    this.changeUrl = this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      distinctUntilChanged(
        (prev: any, next: any) =>
          prev.snapshot.params['lg'] == next.snapshot.params['lg'] && prev.snapshot.params['id'] == next.snapshot.params['id'] 
      ),
      switchMap((event: any) => of({
          lng: event.snapshot.params['lg'],
          id: event.snapshot.params['id'] ?? null,
        }),
      ),
      tap((res: any) => {
        // console.log('restap', res)
        return {
          ...res,
          lng: res.lng && this.langs.includes(res.lng) ? res.lng : 'fr',
        }
      }),
    )

    this.changeUrl.subscribe(({ lng, id }) => {
      // console.log('changeUrl', lng, id);
      
      translate.setDefaultLang(lng)
      this.activeLanguage.next(lng)
      this.articleId.next(id)
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

  getTopArticles(lg: string): Observable<any> {
    return this.httpClient.get<any>('/api/lmshelp/' + lg + '/topArticles')
  }

  getArticleChilde(lg: string, code: string): Observable<any> {
    let artilceUrl = this.increment.getValue()
      ? '/api/lmshelp/' + lg + '/getArticle/' + code + '/' + this.increment.getValue()
      : '/api/lmshelp/' + lg + '/getArticle/' + code
    console.log(artilceUrl)

    return this.httpClient.get<any>(artilceUrl)
  }

  saveSatisfaction(data: any): Observable<any> {
    return this.httpClient.post<any>('/api/lmshelp/saveSatisfaction', data)
  }

  makeSession(): Observable<any> {
    return this.httpClient.get<any>('/api/lmshelp/createSession')
  }
}
