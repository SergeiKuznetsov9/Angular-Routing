import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-main',
  templateUrl: './customers-main.component.html',
  styleUrls: ['./customers-main.component.scss']
})
export class CustomersMainComponent {

  // Router Используется для программной навигации
  constructor( public router: Router) {}

  goByRoute(point: number) {
    // Все что мы укажем в массиве попадет через слэш в параметры строки
    // вторым аргументом можно передать объект с параметрами маршрута
    // в последующем, этот объект можено будет прочитать
    // название полей такого объекта регламентировано
    // Все эти данные также попадут в строку запроса
    // Для следующей записи строка будет такая    http://localhost:4200/customers/customer/1?abra=1#dwefwfwvteg
    this.router.navigate(['/customers', 'customer', point], {
      queryParams: { abra: point},
      fragment: 'dwefwfwvteg'
    })
  }

// Для следующей записи строка будет такая    http://localhost:4200/customers/customer/2 или 3 или 4 ...
  goByRoute2(point: number) {
    this.router.navigate(['/customers', 'customer', point], {      
    })
  }

}
