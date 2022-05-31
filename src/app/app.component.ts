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
  constructor(
    public translate: TranslateService,
  ) {
   
  }
}
