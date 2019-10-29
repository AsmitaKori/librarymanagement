import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  constructor(private userService: UserServiceService) { }
  books = [];
  ngOnInit() {
  }
  search(searchBook: NgForm) {
    this.userService.searchBook(searchBook.value.bookName).subscribe(data => {
      if (data.message === 'Success') {
        console.log(data);
        this.books = data.bookList;
        alert('Book found Successfully');
        searchBook.reset();
      } else {
        console.log(data);
        alert('Failed To find Book');
        searchBook.reset();
      }
    });
  }
}
