import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  imgHide:boolean = true;
  submitted:boolean = false;
  contactForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required,Validators.max(250),Validators.min(25)]),
  });

  constructor() { }


  
  ngOnInit(): void {

    // this.contactForm = this.formBuilder.group(
    //   {
    //     fullname: ['', Validators.required],
    //     email: ['', [Validators.required, Validators.email]],
    //     message: ['', [Validators.required,Validators.max(250),Validators.min(25)]]
    //   }
    // );
  }
  
  togle(value:boolean){
    this.imgHide = value;
    if(value){
      this.contactForm.reset();}
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  sendMessage(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.contactForm.value, null, 2));
  }

}
