import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  private baseURL = 'http://localhost:8083/bill-api/bills';

  constructor(private http: HttpClient) {}

  getBillsByCardNumber(cardId: number): Observable<Bill[]> {
    const url = `${this.baseURL}/card/id/${cardId}`;
    return this.http.get<Bill[]>(url);
  }
}
