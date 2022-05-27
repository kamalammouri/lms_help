import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satisfaction',
  templateUrl: './satisfaction.component.html',
  styleUrls: ['./satisfaction.component.scss']
})
export class SatisfactionComponent implements OnInit {
  satisfyed:boolean;
  constructor() {
  }

  ngOnInit(): void {
    this.satisfyed = null;
  }

  review(rep:boolean){
    this.satisfyed = rep;
  }

}
