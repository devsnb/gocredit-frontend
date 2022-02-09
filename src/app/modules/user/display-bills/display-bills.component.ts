import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { AuthService } from 'src/app/services/auth.service';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-display-bills',
  templateUrl: './display-bills.component.html',
  styleUrls: ['./display-bills.component.css'],
})
export class DisplayBillsComponent implements OnInit {
  userId!: any;
  bills: Bill[] = [];
  constructor(
    private billsService: BillsService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['cardId'];
    });

    this.authService.getLoggedInUser().subscribe((user) => {
      this.userId = user?.userId;
    });

    this.billsService.getBillsByCardNumber(this.userId).subscribe((data) => {
      this.bills = data;
    });
  }
}
