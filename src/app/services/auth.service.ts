import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl!: string;

  login(userLogin: string, userPassword: string): Promise<boolean> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          login: 'admin',
          password: '123',
        });
      }, 2000);
    });

    return promise.then((res: any) => {
      return userLogin === res.login && userPassword === res.password
        ? (this.isLoggedIn = true)
        : false;
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  constructor() {}
}
