import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/credit-card';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8081/user-api/users';

  constructor(private http: HttpClient, private authService: AuthService) {}
  getByUserId = (userId: number): Observable<CreditCard[]> => {
    let url = `${this.baseUrl}/userId/${userId}`;
    return this.http.get<CreditCard[]>(url);
  };

  signUp(user: User) {
    this.authService.signUp(user).subscribe((data) => (user = data));

    const url = `${this.baseUrl}/user/${user.userId}`;

    return this.http.post<CreditCard>(url, user);
  }
}
