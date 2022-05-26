import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GeneraleService {
  activeLanguage = new BehaviorSubject<string>('fr')
  activeUrl = new BehaviorSubject<string>('')
  routeParams: any = new BehaviorSubject<any>(null)
  navigateTo: any = null
  langs = ['en', 'de', 'fr']
  constructor(private router: Router, public translate: TranslateService) {}

}
