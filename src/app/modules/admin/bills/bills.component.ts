import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent implements OnInit {
  userId!: number;
  bills: Bill[] = [];

  constructor(
    private billsService: BillsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['cardId'];
    });

    this.billsService.getBillsByCardNumber(this.userId).subscribe((data) => {
      this.bills = data;
    });
  }
}
