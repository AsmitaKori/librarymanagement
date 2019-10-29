import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  return(book: NgForm) {
    this.userService.return(book.value.transactionId).subscribe(data => {
      if (data.message === 'Success') {
        console.log(data);
        alert('Book return Successfully');
        book.reset();
      } else {
        console.log(data);
        alert('Failed To return Book');
        book.reset();
      }
    });
  }
}
