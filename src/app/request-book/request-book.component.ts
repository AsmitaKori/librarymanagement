import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  request(requestBook: NgForm) {
    this.userService.requestBook(requestBook.value.bookId).subscribe(data => {
      if (data.message === 'Success') {
        console.log(data);
        alert('Book Requested Successfully');
        requestBook.reset();
      } else {
        console.log(data);
        alert('Failed To Request Book');
        requestBook.reset();
      }
    });
  }
}
