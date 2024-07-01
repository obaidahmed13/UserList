import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl = "http://localhost:3000/user";
  constructor(private http:HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }
}
