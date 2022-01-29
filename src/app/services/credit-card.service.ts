import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/credit-card';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  private baseUrl = 'http://localhost:8082/credit-card-api/cards';

  constructor(private http: HttpClient) {}

  getCardsByUserId = (userId: number): Observable<CreditCard[]> => {
    let url = `${this.baseUrl}/userId/${userId}`;
    return this.http.get<CreditCard[]>(url);
  };
}
