import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  avail: any = null;
  backendUrl = 'http://localhost:8080/librarymanagementsystem/user';
  ownerUrl = 'http://localhost:8080/librarymanagementsystem/owner';
  userUrl = 'http://localhost:8080/librarymanagementsystem/enjoyer';

  constructor(private http: HttpClient) { }
  login(data) {
    console.log('login');
    return this.http.post<any>(`${this.backendUrl}/add`, data);
  }
  removeOwner(data) {
    return this.http.delete(`${this.backendUrl}/deleteOwner/${data}`);
  }
  updateLibrarian(data) {
    return this.http.put<any>(`${this.userUrl}/update`, data);
  }
  deleteLibrarian(data) {
    return this.http.delete(`${this.backendUrl}/deleteLibrarian/${data}`);
  }
  getAllLibrarian() {
    return this.http.get<any>(`${this.backendUrl}/getAllLibrarian`);
  }
  getAllCustomer() {
    return this.http.get<any>(`${this.backendUrl}/getAllCustomer`);
  }
  addBook(data) {
    return this.http.post(`${this.ownerUrl}/addBook`, data);
  }
  updateBook(data) {
    return this.http.put(`${this.ownerUrl}/updateBook`, data);
  }
  deleteBus(data) {
    return this.http.delete(`${this.ownerUrl}/deleteBus/${data}`);
  }
  getAllTickets() {
    return this.http.get<any>(`${this.ownerUrl}/getAllTicket`);
  }
  setAvaliability(data) {
    console.log(data);
    return this.http.post(`${this.ownerUrl}/setAvaliability`, data);
  }
  getAllFeedbacks() {
    return this.http.get<any>(`${this.ownerUrl}/getFeedback`);
  }
  showAllBus() {
    return this.http.get<any>(`${this.ownerUrl}/getAllBus`);
  }
  chechAvail(data) {
    return this.http.get<any>(`${this.userUrl}/checkAvailability/${data.startingPoint}/${data.endingPoint}/${data.availableDate}`);
  }
  bookTicket(data) {
    return this.http.post<any>(`${this.userUrl}/bookTicket`, data);
  }
  availa() {
    return this.avail = true;
  }
  viewTicket(data) {
    return this.http.get<any>(`${this.userUrl}/getTicket/${data.bookingId}`);
  }
  updateUser(data) {
    return this.http.put<any>(`${this.userUrl}/update`, data);
  }
  cancelTicket(data) {
    return this.http.delete<any>(`${this.userUrl}/deleteTicket/${data.bookingId}`);
  }
  giveFeedback(data) {
    return this.http.post<any>(`${this.userUrl}/giveFeedback`, data);
  }
}
