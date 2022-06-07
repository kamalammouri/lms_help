import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import {
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
  map,
} from 'rxjs/operators'
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
  changeUrl: Observable<{ lng: string; id?: string }>
  changeLanguage: Observable<string>
  articleId = new BehaviorSubject<string>(null)
  navigToFirstArticle = new BehaviorSubject<boolean>(false)
  subQueryparams$ = this.activeRoute.queryParams; //not working
  constructor(
    private router: Router,
    public translate: TranslateService,
    private activeRoute: ActivatedRoute,
  ) {
    translate.addLangs(this.langs)
    // this.changeLanguage.subscribe(res=> this.changeUrl.next(res))

    this.changeUrl = this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      distinctUntilChanged(
        (prev: any, next: any) =>
          prev.snapshot.params['lg'] == next.snapshot.params['lg'] &&
          prev.snapshot.params['id'] == next.snapshot.params['id'],
      ),
      map((event: any) => {
        // lng: event.snapshot.params['lg'] && this.langs.includes(event.snapshot.params['lg']) ? event.snapshot.params['lg'] : 'fr',
        return {
          lng: event.snapshot.params['lg'],
          id: event.snapshot.params['id'] ?? null,
        }
      })
    )

    this.changeUrl.subscribe(({ lng, id }) => {
      this.activeLanguage.next(lng)
      if (id != null) {
        this.articleId.next(id)
        this.navigToFirstArticle.next(false)
      } else {
        this.navigToFirstArticle.next(true)
      }
    })

    this.activeLanguage.pipe(distinctUntilChanged(),filter((lang:any) => lang)).subscribe((lng: string) => {
      // 
      let _url: any = this.router.url.split('/')
      if (_url.length >= 2) {
        _url[1] = this.langs.includes(_url[1]) ? lng : 'fr'
        translate.setDefaultLang(_url[1])
        _url = _url.join('/')
        this.router.navigateByUrl(_url)

      }     
    })
  }
}
