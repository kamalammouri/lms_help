import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SearchComponent } from './components/search/search.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ContactComponent } from './components/contact/contact.component'
import { ArticleComponent } from './components/article/article.component'
import { ArticleDetailsComponent } from './components/article-details/article-details.component'
import { SatisfactionComponent } from './components/satisfaction/satisfaction.component'
import { ArticleVideoComponent } from './components/article-video/article-video.component'
import { ArticleDescriptionComponent } from './components/article-description/article-description.component'
import { ArticleDocumentComponent } from './components/article-document/article-document.component'
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { HotToastModule } from '@ngneat/hot-toast'
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReactiveFormsModule } from '@angular/forms'
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    SearchDetailsComponent,
    NavbarComponent,
    SearchComponent,
    ContactComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    SatisfactionComponent,
    ArticleVideoComponent,
    ArticleDescriptionComponent,
    ArticleDocumentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    NgxCaptchaModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HotToastModule.forRoot({dismissible: true}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
