import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {

  // Любое приложение Ангуляр, реализующее роутинг, имеет сервис Router,
  // содаваемый в единственом экземпляре. Этот сервис хранит полную конфигурацию
  // маршрутов и реализует API для работы с навигацией.

  // Наиболее часто используемым методом сервиса Router является navigate(). В качестве первого
  // параметра он принимает массив, где задается URL, а в качестве второго — объект с
  // дополнительными параметрами запрашиваемого маршрута
  constructor(private _router: Router) {}

  ngOnInit() {
    console.log(this._router)
  }

  goTo() {
    // Здесь не важно - использовать / в начале маршрута, или нет. Адрес будет использоваться как
    // абсолютный. Но можно вторым параметром передавать объект, в котором указать, что маршрут будет 
    // относительным: { relativeTo: this.route }. В этом объекте также указываются дополнительные
    // параметры

    // В результате перехода по этой кнопке, в браузере будет такая строкаЖ /second-component?id=3#address
    // В компоненте назначения это все можно будет достать и прочитать при помощи сервиса ActivatedRoute
    this._router.navigate(['second-component'], {
      queryParams: { id: 3 },
      fragment: 'address',
    })
  }

}
