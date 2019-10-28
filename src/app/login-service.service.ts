import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isAdminLoggedIn = false;
  isLibrarianLoggedIn = false;
  isUserLoggedIn = false;
  constructor(private http: HttpClient) { }

  isAdminLogin() {
    if (this.isAdminLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
  isLibrarianLoggedI() {
    if (this.isLibrarianLoggedI) {
      return true;
    } else {
      return false;
    }
  }
    isUserLogin() {
      if (this.isUserLoggedIn) {
        return true;
      } else {
        return false;
      }
    }
}
