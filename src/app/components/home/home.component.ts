import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  route_params:any;
  private sub: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((param:any) => {
      if (param.langue){
        this.route_params = param.langue;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
