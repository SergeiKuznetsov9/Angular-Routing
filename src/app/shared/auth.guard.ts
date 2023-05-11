import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {




  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  // ActivatedRouteSnapshot - информация о маршруте, связанном с загружаемым компонентом
  // RouterStateSnapshot - состояние маршрута в определенный отрезок времени. Там будет инфа о маршруте, на который обработал гард

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isLoggedIn) return true
    console.log(state.url)
    this.authService.redirectUrl = state.url
    this.router.navigate(['login'])
    return false;
  }
  
}
