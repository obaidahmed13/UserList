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

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiurl, user)
  }

  deleteUser(id: string) : Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/${id}`);
  }

}
