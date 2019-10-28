import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  user(addUser: NgForm) {
    this.userService.addUser(addUser.value).subscribe(data => {
      if (data != null) {
        console.log(data);
        alert('User Added Successfully id is ' + `${data.user.userId}`);
        addUser.reset();
      } else {
        console.log(data);
        // console.log("NO Output");
        alert('ENTER CORRECT CREDENTAILS');
        addUser.reset();
      }

    });
  }


}
