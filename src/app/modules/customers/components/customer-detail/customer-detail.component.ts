import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  cusNum?: string;
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(res => this.cusNum = res['id'])
  }
}
