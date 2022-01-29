import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseAdminUrl = 'http://localhost:8081/admin-api/users';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(this.baseAdminUrl);
  }

  getById(id: number) {
    const url = `${this.baseAdminUrl}/id/${id}`;
    return this.http.get<User>(url);
  }
}
