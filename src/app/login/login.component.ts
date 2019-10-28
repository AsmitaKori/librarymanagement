import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [];
  constructor(private http: HttpClient, private loginService: LoginServiceService,private router: Router) { }

  ngOnInit() {
  }
  login(loginForm: NgForm) {

    console.log(loginForm.value);
    console.log('yashu');
    this.http.post<any>(`http://localhost:8080/login`, loginForm.value).subscribe(data => {
      console.log(data.user.type);
      this.users = data.user;
      if (data.user.type === 'lib') {
        alert('login successfull');
        this.loginService.isLibrarianLoggedIn = true;
        this.router.navigateByUrl('/');
      } else if (data.user.type === 'student') {
        alert('login successfull');
        this.loginService.isUserLoggedIn = true;
        this.router.navigateByUrl('/');
      } else if (data.user.type === 'admin') {
        alert('login successfull');
        this.loginService.isAdminLoggedIn = true;
        this.router.navigateByUrl('/');
      } else {
        alert('ENTER CORRECT CREDENTAILS');
        loginForm.reset();
      }
    });
  }

}
