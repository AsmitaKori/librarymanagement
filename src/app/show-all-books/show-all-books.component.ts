import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-show-all-books',
  templateUrl: './show-all-books.component.html',
  styleUrls: ['./show-all-books.component.css']
})
export class ShowAllBooksComponent implements OnInit {
  books = [];
  constructor(private userService: UserServiceService) {this.getbooks(); }

  ngOnInit() {
  }
  getbooks() {
    this.userService.getAllBooks().subscribe(data => {
      console.log(data);
      this.books = data.bookList;
    });
  }
}
