import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/exit-about-guard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements ComponentCanDeactivate {

  saved: boolean = false
  save() {
    this.saved = true
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('Вы хотите покинуть страницу?')
    } else {
      return true
    }
  }

}
