import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit() {
  }
  get isAdminLogin() {
    return this.loginService.isAdminLogin();
  }
  get isLibrarianLogin() {
    return this.loginService.isLibrarianLogIn();
  }
  get isUserLogin() {
    return this.loginService.isUserLogin();
  }
  logout() {
    this.loginService.isAdminLoggedIn = false;
    this.loginService.isLibrarianLoggedIn = false;
    this.loginService.isUserLoggedIn = false;
    this.router.navigateByUrl('/');
  }
}
