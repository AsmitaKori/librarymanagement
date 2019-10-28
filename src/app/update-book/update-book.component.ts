import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  books: any = [];
  constructor(private usrService: UserServiceService) { }

  ngOnInit() {
  }
  updateBookInfo(updateBook: NgForm) {
    this.usrService.updateBook(updateBook.value).subscribe(book => {
      this.books = book;
      if (this.books.message === 'success') {
        console.log(book);
        alert('book Updated Successfully');
        updateBook.reset();
      } else {
        console.log(book);
        alert('Failed To Updatebook');
        updateBook.reset();
      }
    }
    );
  }

}
