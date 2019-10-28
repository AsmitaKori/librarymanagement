import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-librarian',
  templateUrl: './delete-librarian.component.html',
  styleUrls: ['./delete-librarian.component.css']
})
export class DeleteLibrarianComponent implements OnInit {
  constructor(private userService: UserServiceService) {}
  ngOnInit() {
  }
  delete(id: NgForm) {
    this.userService.deleteLibrarian(id.value.userId).subscribe(data => {
      if (data.message === 'Success') {
        console.log(data);
        alert('librarian deleted Successfully');
        id.reset();
      } else {
        console.log(data);
        alert('Failed To delete librarian');
        id.reset();
      }
    });
  }
}

