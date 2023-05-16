import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs'

export class AboutGuard implements CanActivate {

  // Класс AboutGuard реализует интерфейс CanActivate, а именно его метод canActivate().
  // Этот метод получает два параметра — объекты ActivatedRouteSnapshot и RouterStateSnapshot,
  // которые содержат информацию о запросе. ActivatedRouteSnapshot позволяет получить различную
  // информацию из запроса, в том числе параметры маршрута и строки запроса
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return confirm('Вы уверены, что хотите перейти?')
  }
}