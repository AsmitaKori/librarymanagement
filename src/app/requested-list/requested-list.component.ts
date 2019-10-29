import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-requested-list',
  templateUrl: './requested-list.component.html',
  styleUrls: ['./requested-list.component.css']
})
export class RequestedListComponent implements OnInit {
  books = [];
  constructor(private userService: UserServiceService) { this.getbooks(); }

  ngOnInit() {
  }
  getbooks() {
    this.userService.requestList().subscribe(data => {
      console.log(data);
      this.books = data.registrationList;
    });
  }
  accept(table) {
    this.userService.accept(table).subscribe(data => {
      if (data.message === 'Success') {
        console.log(data);
        alert('Requested accepted Successfully');
        this.getbooks();
      } else {
        console.log(data);
        alert('Failed To accept Request');
      }
    });
  }
  reject(table) {
    this.userService.accept(table).subscribe(data => {
      if (data.message === 'Success') {
        console.log(data);
        alert('Requested Rejected Successfully');
        this.getbooks();
      } else {
        console.log(data);
        alert('Failed To Reject Request');
      }
    });
  }
}
