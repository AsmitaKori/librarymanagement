import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private usrService: UserServiceService) { }

  ngOnInit() {
  }
  addBook(createBook: NgForm) {
    this.usrService.addBook(createBook.value).subscribe(book => {
      if (book != null) {
        console.log(book);
        alert('Book Added Successfully');
        createBook.reset();
      } else {
        console.log(book);
        alert('Failed To AddBook');
        createBook.reset();
      }
    }
    );
  }

}
