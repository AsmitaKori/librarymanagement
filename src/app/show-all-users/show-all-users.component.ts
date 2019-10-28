import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  users = [];
  constructor(private userService: UserServiceService) {this.getusers(); }

  ngOnInit() {
  }
  getusers() {
    this.userService.showAllUsers().subscribe(data => {
      console.log(data);
      this.users = data.userList;
    });
  }

}
