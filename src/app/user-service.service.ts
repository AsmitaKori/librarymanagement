import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  adminUrl = 'http://localhost:8081/admin';
  librarianUrl = 'http://localhost:8081/librarian';
  userUrl = 'http://localhost:8081/user';

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
  searchBook(data) {
    return this.http.get<any>(`${this.userUrl}/searchBooks/${ data}`);
  }
  requestBook(data) {
    return this.http.post<any>(`${this.userUrl}/requestBook`, data);
  }
  recieveBook() {
    return this.http.get<any>(`${this.userUrl}/getRecievedBooks`);
  }
  requestList() {
    return this.http.get<any>(`${this.librarianUrl}/getRequestList`);
  }
  accept(data) {
    return this.http.post<any>(`${this.librarianUrl}/toIssueBook/${data.registrationId}/${data.userId}`, data);
  }
  reject(data) {
    return this.http.delete<any>(`${this.librarianUrl}/toRejectRequest/${data.registrationId}`, data);
  }
  return(data) {
    return this.http.delete<any>(`${this.librarianUrl}/returnBook/${data}`);
  }
}
