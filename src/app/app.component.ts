import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) {}



  hide() {
    this.router.navigate([{ outlets: { secondary: null } }])


  }

  show() {
    this.router.navigate([
      { outlets: { secondary: 'secondary-path' } },
    ])
  }
}
