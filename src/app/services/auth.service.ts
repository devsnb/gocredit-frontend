import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/user-api/users';

  private loggedInUser: User | undefined;

  constructor(private http: HttpClient) {}

  loginWithEmail = (email: string, password: string): Observable<User> => {
    let url = `${this.baseUrl}/login/email/${email}/password/${password}`;
    const user = this.http.post<User>(url, {});
    user.subscribe((data) => (this.loggedInUser = data));
    return user;
  };

  loginWithContact = (contact: number, password: string): Observable<User> => {
    let url = `${this.baseUrl}/login/contact/${contact}/password/${password}`;
    const user = this.http.post<User>(url, {});
    user.subscribe((data) => (this.loggedInUser = data));
    return user;
  };

  getLoggedInUser() {
    return of(this.loggedInUser);
  }

  signUp = (user: User): Observable<User> => {
    let url = `${this.baseUrl}`;
    return this.http.post<User>(url, user);
  };
}
