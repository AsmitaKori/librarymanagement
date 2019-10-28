import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  delete(book: NgForm) {
    this.userService.deleteBook(book.value.bookId).subscribe(data => {
      if (data.message === 'Success') {
        console.log(data);
        alert('Book deleted Successfully');
        book.reset();
      } else {
        console.log(data);
        alert('Failed To delete Book');
        book.reset();
      }
    });
  }
}
