import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject } from 'rxjs'
import { distinctUntilChanged, filter } from 'rxjs/operators'
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
  activeLanguage = new BehaviorSubject<string>(null)
  activeUrl = new BehaviorSubject<string>('')
  lg$: string = null
  routeParams: any = new BehaviorSubject<any>(null)
  navigateTo: any = null
  langs = ['en', 'de', 'fr']
  constructor(
    private router: Router,
    public translate: TranslateService,
    private httpClient: HttpClient,
  ) {
    // Register translation languages
    translate.addLangs(this.langs)
    // Set default language
    this.router.events.subscribe((event: any) => {
      // console.log('event.snapshot',event);
      if (event instanceof ActivationEnd) {
        if (
          event.snapshot.params['lg'] &&
          this.langs.includes(event.snapshot.params['lg'])
        ) {
          translate.setDefaultLang(event.snapshot.params['lg'])
          this.activeLanguage.next(event.snapshot.params['lg'])
          console.log('activeLg', this.activeLanguage.getValue())
        } else {
          translate.setDefaultLang('fr')
          this.activeLanguage.next('fr')
        }
      }
    })
    this.activeLanguage
      .pipe(
        distinctUntilChanged(),
        filter((res: any) => res != null),
      )
      .subscribe((lg: string) => {
        // console.log('url',this.router.url);
        let _url: any = this.router.url.split('/')
        if (_url.length >= 2 && this.langs.includes(_url[1]) && _url[1] != lg) {
          _url[1] = lg
          _url = _url.join('/')
          this.router.navigateByUrl(_url)
        }
        // let url: string = lg + '/' + this.router.url.split('/').splice(2).join('/')
        // console.log('url slice',url);
        // if(this.router.url.split('/').splice(2).join('/') != '') this.router.navigateByUrl(url)
        // this.router.navigateByUrl(url)
      })
  }

  getTopArticles(lg:string) {
    // console.log('getTopArticles/' + lg + '/topArticles')
    return this.httpClient.get('/api/lmshelp/' + lg + '/topArticles')
  }

  getArticleChilde(lg:string ,code: string, increment: boolean = null) {
    // console.log(lg + 'getArticleChilde ' + code)
    return this.httpClient.get(
      '/api/lmshelp/' + lg + '/getArticle/' + code + '/' + increment,
    )
  }

  makeSession() {
    return this.httpClient.get('/api/lmshelp/createSession')
  }
}
