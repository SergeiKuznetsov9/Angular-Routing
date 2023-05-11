import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  
  userLogin: string = 'admin'
  userPassword: string = '123'
  message!: string;
  
  constructor(public authService: AuthService, private router: Router) {}


  ngOnInit() {
    this.setMessage()
  }


  login() {
    this.authService.login(this.userLogin, this.userPassword).then( res => {
      this.setMessage()
      if(!this.authService.isLoggedIn) return
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin'
      this.router.navigate([redirect])
    })
  }

  logout() {
    this.authService.logout()
  }

  private setMessage() {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`
  }

}
