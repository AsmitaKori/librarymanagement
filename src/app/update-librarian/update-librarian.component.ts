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
    this.userService.updateLibrarian(updateLibrarian.value).subscribe(lib => {
      this.librarian = lib;
      if (lib.message === 'Success') {
        console.log(lib);
        alert('librarian Updated Successfully');
        updateLibrarian.reset();
      } else {
        console.log(lib);
        alert('Failed To Update librarian');
        updateLibrarian.reset();
      }
    }
    );

  }
}
