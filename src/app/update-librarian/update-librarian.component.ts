import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-librarian',
  templateUrl: './update-librarian.component.html',
  styleUrls: ['./update-librarian.component.css']
})
export class UpdateLibrarianComponent implements OnInit {
  librarian: any = [];
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(updateLibrarian: NgForm) {
    this.userService.updateLibrarian(updateLibrarian.value).subscribe(bus => {
      this.librarian = bus;
      if (bus.message === 'Success') {
        console.log(bus);
        alert('librarian Updated Successfully');
        updateLibrarian.reset();
      } else {
        console.log(bus);
        alert('Failed To Update librarian');
        updateLibrarian.reset();
      }
    }
    );

  }
}
