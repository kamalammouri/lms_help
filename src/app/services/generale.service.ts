import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GeneraleService {
  activeLanguage = new BehaviorSubject<string>('')
  routeParams: any = new BehaviorSubject<any>(null)
  navigateTo: any = null
  langs=['en', 'de', 'fr'];
  constructor(
    private router: Router,
    public translate: TranslateService,
  ) {}

  //http://localhost:4200/fr/search?q=mot_de_pass&f=video

  translateLanguage(lang: string,redirectTo: boolean = false) {
    this.translate.use(lang)
    this.activeLanguage.next(lang)
    if (redirectTo) {
    this.navigateTo = this.router.url.split('/')
    this.navigateTo[1] = lang
    this.router.navigateByUrl(this.navigateTo.join('/'))
    }
  }
}
