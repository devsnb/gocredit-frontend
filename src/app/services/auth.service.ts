import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/user-api/users';

  constructor(private http: HttpClient) {}

  loginWithEmail = (email: string, password: string): Observable<User> => {
    let url = `${this.baseUrl}/login/email/${email}/password/${password}`;
    return this.http.post<User>(url, {});
  };

  loginWithContact = (contact: number, password: string): Observable<User> => {
    let url = `${this.baseUrl}/login/contact/${contact}/password/${password}`;
    return this.http.post<User>(url, {});
  };
}
