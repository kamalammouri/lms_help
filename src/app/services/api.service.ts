import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  increment = new BehaviorSubject<boolean>(false)
  constructor(private httpClient: HttpClient) {}

  getTopArticles(lg: string): Observable<any> {
    return this.httpClient.get<any>('/api/lmshelp/' + lg + '/topArticles')
  }

  getArticleChilde(lg: string, code: string): Observable<any> {
    let artilceUrl = this.increment.getValue()
      ? '/api/lmshelp/' +
        lg +
        '/getArticle/' +
        code +
        '/' +
        this.increment.getValue()
      : '/api/lmshelp/' + lg + '/getArticle/' + code
    // console.log(artilceUrl)

    return this.httpClient.get<any>(artilceUrl)
  }

  makeSession(): Observable<any> {
    return this.httpClient.get<any>('/api/lmshelp/createSession')
  }

  search(data:any): Observable<any> {
    return this.httpClient.post<any>('/api/lmshelp/search',data)
  }
}
