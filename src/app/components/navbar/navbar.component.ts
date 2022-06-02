import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { GeneraleService } from 'src/app/services/generale.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{
  activeLg = this.generaleService.activeLanguage
  constructor(
    public translate: TranslateService,
    private generaleService: GeneraleService,
  ) {
  }

  ngOnInit(): void {}

  translateLanguageTo(lg: string) {
    this.generaleService.activeLanguage.next(lg);

  }
}
