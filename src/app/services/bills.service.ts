import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';
import { CreditCard } from '../models/credit-card';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  private baseURL = 'http://localhost:8083/bill-api/bills';

  constructor(private http: HttpClient, private adminService: AdminService) {}

  getBillsByCardNumber(cardId: number): Observable<Bill[]> {
    const url = `${this.baseURL}/cardId/${cardId}`;
    return this.http.get<Bill[]>(url);
  }

  addBill(bill: Bill, cardId: number) {
    const url = `${this.baseURL}/card/${cardId}`;
    return this.http.post<CreditCard>(url, bill);
  }
}
