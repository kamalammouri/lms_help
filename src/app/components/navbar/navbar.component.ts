import { Component, OnDestroy, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { GeneraleService } from 'src/app/services/generale.service'
import { filter, map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy{
  activeLg: string = ''
  activeUrl: string = ''
  subLang:Subscription;
  subUrl:Subscription;
  constructor(
    private router: Router,
    public translate: TranslateService,
    private generaleService: GeneraleService,
  ) {
    this.subLang = this.generaleService.activeLanguage.subscribe(
      (lang) => (this.activeLg = lang),
    )
    this.subUrl = this.generaleService.activeUrl
      .pipe(
        filter((res: any) => res != undefined || res != null || res != ''),
        map((res: any) => res.split('/')),
      )
      .subscribe((url: any) => {
        if (url.length > 1) {
          this.activeUrl = url.splice(2).join('/')
        }
      })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subLang.unsubscribe()
    this.subUrl.unsubscribe()
  }

  translateLanguageTo(lg: string) {
    let url: string = lg + '/' + this.activeUrl
    this.router.navigateByUrl(url)
  }
}
