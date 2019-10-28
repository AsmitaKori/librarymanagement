import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  adminUrl = 'http://localhost:8081/admin';
  librarianUrl = 'http://localhost:8081/librarian';
  userUrl = 'http://localhost:8080/librarymanagementsystem/user';

  constructor(private http: HttpClient) { }
  addLibrarian(data) {
    return this.http.post<any>(`${this.adminUrl}/addLibrarian`, data);
  }
  updateLibrarian(data) {
    return this.http.post<any>(`${this.adminUrl}/updateLibrarian`, data);
  }

  showAllLibrarians() {
    return this.http.get<any>(`${this.adminUrl}/showLibrarians`);
  }
  deleteLibrarian(data) {
    return this.http.delete<any>(`${this.adminUrl}/deleteLibrarian/${data}`);
  }
  addBook(data) {
    return this.http.post<any>(`${this.librarianUrl}/addBook`, data);
  }
  getAllBooks() {
    return this.http.get<any>(`${this.librarianUrl}/getAllBooks`);
  }
  getIssueBooks() {
    return this.http.get<any>(`${this.librarianUrl}/getIssueBooks`);
  }
  deleteBook(data) {
    return this.http.delete<any>(`${this.librarianUrl}/deleteBook/${data}`);
  }
  showAllUsers() {
    return this.http.get<any>(`${this.librarianUrl}/showAllUsers`);
  }
  addUser(data) {
    return this.http.post<any>(`${this.librarianUrl}/addUser`, data);
  }
}
