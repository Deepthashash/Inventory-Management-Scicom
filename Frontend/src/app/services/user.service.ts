import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private allUsers_url = "http://localhost:8080/backend/api/users";
  private registerUser_url = "http://localhost:8080/backend/api/register";
  private login_url = "http://localhost:8080/backend/api/login";
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.allUsers_url);
  }

  register(user: User): Promise<any> {
    return this.http
      .post<any>(this.registerUser_url, user)
      .toPromise();
  }

  login(user: any): Promise<any> {    
    return this.http
      .post<any>(this.login_url, user)
      .toPromise();
  }
  
  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
