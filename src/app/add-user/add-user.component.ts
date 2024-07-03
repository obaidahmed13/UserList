import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user: User = {id: this.generateRandomId() ,name: '', age: 0};
  constructor(private userService: UserService, private router: Router) {
  }
  generateRandomId(): string {
    return Math.floor(Math.random() * 1000000).toString();
  }
  addUser() : void{
    this.userService.addUser(this.user).subscribe(()=>{
      
      this.router.navigate(['/']);
    })
  }

}
