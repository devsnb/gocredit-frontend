import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-add-bill-form',
  templateUrl: './add-bill-form.component.html',
  styleUrls: ['./add-bill-form.component.css'],
})
export class AddBillFormComponent implements OnInit {
  constructor(private billService: BillsService) {}

  ngOnInit(): void {}

  onAddBill(form: NgForm) {
    this.billService.addBill;
  }
}
