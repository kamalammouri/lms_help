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

  langChange$ = of('fr')
  articleIdChange$ = of(null)
  searchChange$ = of({ q: null, f: null })

  activeLanguage = new BehaviorSubject<string>(null)
  fristArticle = new BehaviorSubject<string>(null)
  changeLanguage: Observable<string>
  changeUrl: Observable<{ lng: string; id?: string }>
  articleId = new BehaviorSubject<string>(null)
  // changeUrl= new BehaviorSubject<string>(null)
  constructor(
    private router: Router,
    public translate: TranslateService,
    private activeRoute: ActivatedRoute,
  ) {
    translate.addLangs(this.langs)

    this.langChange$ = this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      map((event: any) => event.snapshot.params['lg'] ?? null),
      distinctUntilChanged(),
    )

    this.articleIdChange$ = this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      map((event: any) => event.snapshot.params['id'] ?? null),
      distinctUntilChanged(),
    )

    this.searchChange$ = this.activeRoute.queryParams.pipe(
      filter((res: any) => res.q != undefined || res.q != null),
      // map((res: any) => (res.q != undefined || res.q != null) && (res.q != undefined || res.q != null)),
      distinctUntilChanged(
        (prev: any, cur: any) => prev.q === cur.q && prev.f === cur.f,
      )
    )

    this.langChange$.subscribe((lng: any) => console.log('langChange', lng));
    this.articleIdChange$.subscribe((id: any) => console.log('articleIdChange', id));
    this.searchChange$.subscribe((res: any) => console.log('searchChange', res));

    this.langChange$.subscribe((lng: any) => {
      this.translate.use(lng)
      let _url: any = this.router.url.split('/')
      if (_url.length >= 2 && this.langs.includes(_url[1])) {
        _url[1] = lng
        _url = _url.join('/')
        this.router.navigateByUrl(_url)
      }
    })
    // this.changeLanguage.subscribe(res=> this.changeUrl.next(res))

    // this.changeUrl = this.router.events.pipe(
    //   filter((event: any) => event instanceof ActivationEnd),
    //   distinctUntilChanged(
    //     (prev: any, next: any) =>
    //       prev.snapshot.params['lg'] == next.snapshot.params['lg'] &&
    //       prev.snapshot.params['id'] == next.snapshot.params['id'],
    //   ),
    //   map((event: any) => {
    //     return {
    //       lng: event.snapshot.params['lg'],
    //       id: event.snapshot.params['id'] ?? null,
    //     }
    //   }),
    //   tap((res: any) => {
    //     return {
    //       ...res,
    //       lng: res.lng && this.langs.includes(res.lng) ? res.lng : 'fr',
    //     }
    //   }),
    // )

    /* this.changeUrl.subscribe(({ lng, id }) => {
      translate.setDefaultLang(lng)
      this.activeLanguage.next(lng)
      this.articleId.next(id)
    })

    this.activeLanguage.pipe(distinctUntilChanged()).subscribe((lg: string) => {
      let _url: any = this.router.url.split('/')
      if (_url.length >= 2 && this.langs.includes(_url[1])) {
        _url[1] = lg
        _url = _url.join('/')
        this.router.navigateByUrl(_url)
      }
    })*/
  } 
}
