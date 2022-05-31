import { HttpClient } from '@angular/common/http'
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
  constructor(private router: Router, public translate: TranslateService,private httpClient: HttpClient) {}

  getTopArticles(){
    // console.log('api/'+this.activeLanguage.getValue()+'/topArticles');
    return this.httpClient.get('/api/lmshelp/'+this.activeLanguage.getValue()+'/topArticles');
  }

  getArticleChilde(code: string,increment:boolean = null){
    // console.log('api/'+this.activeLanguage.getValue()+'/topArticles');
    return this.httpClient.get('/api/lmshelp/'+this.activeLanguage.getValue()+'/getArticle/'+code+'/'+increment);
  }

  makeSession(){
    return this.httpClient.get('/api/lmshelp/createSession');
  }
}
