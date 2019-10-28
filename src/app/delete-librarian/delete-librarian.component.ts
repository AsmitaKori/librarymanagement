import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-librarian',
  templateUrl: './delete-librarian.component.html',
  styleUrls: ['./delete-librarian.component.css']
})
export class DeleteLibrarianComponent implements OnInit {
  constructor(private userService: UserServiceService) { this.getAllLibrarian(); }
  librarian: any[] = [];
  ngOnInit() {
  }
  remove(id: NgForm) {
    this.userService.deleteLibrarian(id.value.userId).subscribe(data => {
      if (data != null) {
        console.log(data);
        alert('User Deleted Succesfully');
        id.reset();
        this.getAllLibrarian();
      } else {
        console.log(data);
        alert('Failed TO Delete Owner');
        id.reset();
      }
    });
  }
  getAllLibrarian() {
    this.userService.getAllLibrarian().subscribe(data => {
      console.log(data);
      this.librarian = data.userList;
    }
    );
  }

}

