import { Component, OnDestroy, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { GeneraleService } from 'src/app/services/generale.service'
import { filter, map } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy{
  activeLg: string = ''
  activeUrl: string = ''
  // subLang:Subscription;
  constructor(
    public translate: TranslateService,
    private generaleService: GeneraleService,
  ) {
    // this.subLang = this.generaleService.activeLanguage.subscribe(
    //   (lang) => (this.activeLg = lang),
    // )
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.subLang.unsubscribe()
  }

  translateLanguageTo(lg: string) {
    this.generaleService.activeLanguage.next(lg);

  }
}
