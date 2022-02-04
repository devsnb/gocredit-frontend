import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/credit-card';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  private baseUrl = 'http://localhost:8082/credit-card-api/cards';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getCardsByUserId = (userId: number): Observable<CreditCard[]> => {
    let url = `${this.baseUrl}/userId/${userId}`;
    return this.http.get<CreditCard[]>(url);
  };

  deleteCreditCard = (cardId: number) => {
    let url = `${this.baseUrl}/id/${cardId}`;
    console.log(cardId);
    this.http.delete(url);
  };

  addCreditCard(card: CreditCard): Observable<CreditCard> {
    let user: User | undefined;

    this.authService.getLoggedInUser().subscribe((data) => (user = data));

    if (!user) {
      throw new Error('User must be logged in');
    }

    const url = `${this.baseUrl}/user/${user.userId}`;

    console.log(card);

    return this.http.post<CreditCard>(url, card);
  }
}
