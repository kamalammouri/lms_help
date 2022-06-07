import { Component, OnInit } from '@angular/core'
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  imgHide: boolean = true
  submitted: boolean = false
  siteKey:string= '6LecyE4gAAAAAHFbh-SQ_CjblCFxtXhf4sFpqx8V';
  size='Normal'
  hl="lang"
  theme="theme"
  type='Image'
  contactForm: FormGroup
  constructor(private formBuilder: FormBuilder) {}

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
  }

  togle(value: boolean) {
    this.imgHide = value
    if (value) {
      this.contactForm.reset()
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
    console.log(JSON.stringify(this.contactForm.value, null, 2));
  }
}
