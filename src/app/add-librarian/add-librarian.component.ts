import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-librarian',
  templateUrl: './add-librarian.component.html',
  styleUrls: ['./add-librarian.component.css']
})
export class AddLibrarianComponent implements OnInit {
  name = 'librarian';
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  librarian(addLibrarian: NgForm) {

    this.userService.login(addLibrarian.value).subscribe(data => {
      if (data != null) {
        console.log(data);
        alert('Librarian Added Successfully');
        addLibrarian.reset();
      } else {
        console.log(data);
        // console.log("NO Output");
        alert('ENTER CORRECT CREDENTAILS');
        addLibrarian.reset();
      }

    });
  }

}
