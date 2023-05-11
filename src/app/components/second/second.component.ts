import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this._route)
    console.log(this._route.params)
  }


  

}
