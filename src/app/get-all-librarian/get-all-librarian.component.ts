import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-get-all-librarian',
  templateUrl: './get-all-librarian.component.html',
  styleUrls: ['./get-all-librarian.component.css']
})
export class GetAllLibrarianComponent implements OnInit {
  users = [];
  constructor(private userService: UserServiceService) {this.getLibrarians(); }

  ngOnInit() {
  }
  getLibrarians() {
    this.userService.showAllLibrarians().subscribe(data => {
      console.log(data);
      this.users = data.userList;
    });
  }
}
