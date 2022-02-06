import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { BillsService } from 'src/app/services/bills.service';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-add-bill-form',
  templateUrl: './add-bill-form.component.html',
  styleUrls: ['./add-bill-form.component.css'],
})
export class AddBillFormComponent implements OnInit {
  cardId!: number;

  constructor(
    private billService: BillsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.cardId = params['cardId'])
    );
  }

  async onAddBill(form: NgForm) {
    const bill = {
      billerName: form.value.billerName,
      date: new Date().toISOString().split('T')[0],
      amount: form.value.amount,
      isPaid: false,
    };
    this.billService.addBill(bill as Bill, this.cardId).subscribe();
  }
}
