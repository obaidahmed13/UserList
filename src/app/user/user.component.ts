import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  allUsers: User [] = [];
  user: User = {id: this.generateRandomId(),name: '', age: 0};
  constructor(private userService: UserService, private router: Router) {
  }

  generateRandomId(): string {
    return Math.floor(Math.random() * 1000000).toString();
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.allUsers = data;
    })
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.allUsers = this.allUsers.filter(user => user.id !== id);
    });
  }

  
}
