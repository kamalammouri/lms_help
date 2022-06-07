import { Component, Input, OnInit, OnChanges } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from 'src/app/services/api.service'
import { GeneraleService } from 'src/app/services/generale.service'

@Component({
  selector: 'app-satisfaction',
  templateUrl: './satisfaction.component.html',
  styleUrls: ['./satisfaction.component.scss'],
})
export class SatisfactionComponent implements OnInit {
  resetForm: boolean
  @Input('articleId') articleId: string
  messageCtr = new FormControl('', Validators.required)
  constructor(
    private generaleService: GeneraleService,
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  review(satisf: boolean, withMsg: boolean = false) {
    if (satisf && !withMsg) {
      this.sendReview()
    } else if (satisf && withMsg) {
      this.messageCtr.value != '' ? this.sendReview(false) : false
    } else {
      this.resetForm = false
    }
  }

  inistialize() {
    this.resetForm = null
  }

  sendReview(flage: boolean = true) {
    let data: any = {
      code: this.articleId,
      lang: this.generaleService.activeLanguage.getValue(),
    }
    flage ? false : (data.message = this.messageCtr.value)

    // flage
    //   ? (data =
    //       this.generaleService.activeLanguage.getValue() + '/' + this.articleId)
    //   : (data =
    //       this.generaleService.activeLanguage.getValue() +
    //       '/' +
    //       this.articleId +
    //       '/' +
    //       this.messageCtr.value)

    console.log(data);
    
    this.apiService.satisfaction(data).subscribe((res) => {
      // console.log('stf', res)
      this.resetForm = true
    })
  }
}
