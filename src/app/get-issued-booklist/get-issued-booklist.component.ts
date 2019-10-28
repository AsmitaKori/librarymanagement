import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-get-issued-booklist',
  templateUrl: './get-issued-booklist.component.html',
  styleUrls: ['./get-issued-booklist.component.css']
})
export class GetIssuedBooklistComponent implements OnInit {
  books = [];
  constructor(private userService: UserServiceService) {this.getbooks(); }

  ngOnInit() {
  }
  getbooks() {
    this.userService.getIssueBooks().subscribe(data => {
      console.log(data);
      this.books = data.transactionList;
    });
  }
}
