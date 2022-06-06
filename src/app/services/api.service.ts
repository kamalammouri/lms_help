import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  increment = new BehaviorSubject<boolean>(false)
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  constructor(private httpClient: HttpClient) {}

  getTopArticles(lg: string): Observable<any> {
    
    return this.httpClient.get<any>('http://192.168.1.24/api/lmshelp/' + lg + '/topArticles')
  }

  getArticleChilde(lg: string, code: string): Observable<any> {
    
    let artilceUrl = this.increment.getValue()
      ? 'http://192.168.1.24/api/lmshelp/' +
        lg +
        '/getArticle/' +
        code +
        '/' +
        this.increment.getValue()
      : 'http://192.168.1.24/api/lmshelp/' + lg + '/getArticle/' + code

    return this.httpClient.get<any>(artilceUrl)
  }

  makeSession(): Observable<any> {
    return this.httpClient.get<any>('http://192.168.1.24/api/lmshelp/createSession')
  }

  search(data:any): Observable<any> {
    return this.httpClient.get<any>('http://192.168.1.24/api/lmshelp/search/'+data)
  }
}
