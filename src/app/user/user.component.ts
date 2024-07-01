import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  allUsers: User [] = [];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.allUsers = data;
    })
  }
}
