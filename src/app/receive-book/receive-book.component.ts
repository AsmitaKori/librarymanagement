import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-receive-book',
  templateUrl: './receive-book.component.html',
  styleUrls: ['./receive-book.component.css']
})
export class ReceiveBookComponent implements OnInit {
  books = [];
  constructor(private userService: UserServiceService) {this.getbooks(); }

  ngOnInit() {
  }
  getbooks() {
    this.userService.recieveBook().subscribe(data => {
      console.log(data);
      this.books = data.transactionList;
    });
  }
}
