import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.css'],
})
export class AddCreditCardComponent implements OnInit {
  constructor(private cardService: CreditCardService) {}

  ngOnInit(): void {}

  onAddCard(form: NgForm) {
    this.cardService
      .addCreditCard(form.value)
      .subscribe((data) => console.log(data));
  }
}
