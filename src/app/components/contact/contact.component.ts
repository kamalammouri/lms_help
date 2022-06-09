import { Component, OnInit } from '@angular/core'
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms'
import { ApiService } from 'src/app/services/api.service'
import { GeneraleService } from 'src/app/services/generale.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup
  imgHide: boolean = true
  submitted: boolean = false
  siteKey: string = '6LfO308gAAAAAB-zLkKIZkvPr5W8HyMktlmOihn5'
  lng: string = 'fr'
  constructor(
    private formBuilder: FormBuilder,
    private generaleService: GeneraleService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.max(250),
        Validators.min(25),
      ]),
      recaptcha: ['', Validators.required],
    })

    this.generaleService.activeLanguage.subscribe((lng) => (this.lng = lng))
  }

  togle(value: boolean, clear: boolean = false) {
    this.imgHide = value
    if (clear) {
      this.contactForm.reset()
      this.contactForm.clearValidators()
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls
  }

  sendMessage(): void {
    this.submitted = true
    if (this.contactForm.invalid) {
      return
    }
    // let data:string = this.contactForm.value.fullname+'/'+this.contactForm.value.email+'/'+this.contactForm.value.message
    // console.log(this.contactForm.value);

    this.apiService.contact(this.contactForm.value).subscribe((res) => {
      // console.log('contact',res)
      this.imgHide = true
    })
  }
}
