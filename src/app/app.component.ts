import { Component } from '@angular/core'
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { GeneraleService } from './services/generale.service'
import { Location } from '@angular/common'
import { distinctUntilChanged } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'helplms'
  langs = ['en', 'de', 'fr']
  constructor(
    public translate: TranslateService,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
    private router: Router,
  ) {
    // Register translation languages
    translate.addLangs(this.langs)
    // Set default language
    this.router.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        // console.log('lng',event.snapshot);
        if (
          event.snapshot.params['lg'] &&
          this.langs.includes(event.snapshot.params['lg'])
        ) {
          translate.setDefaultLang(event.snapshot.params['lg'])
          this.generaleService.activeLanguage.next(event.snapshot.params['lg'])
        } else {
          translate.setDefaultLang('fr')
          this.generaleService.activeLanguage.next('fr')
        }
      }
    })
    this.generaleService.activeLanguage.pipe(distinctUntilChanged()).subscribe((lg: string) => {
      // console.log('url',this.router.url);
      let _url:any = this.router.url.split('/')
      if(_url.length>=2 && this.langs.includes(_url[1]) && _url[1]!=lg){
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
}
