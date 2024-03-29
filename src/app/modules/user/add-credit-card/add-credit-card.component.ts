import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.css'],
})
export class AddCreditCardComponent implements OnInit {
  constructor(private cardService: CreditCardService) {}

  successful: boolean = false;

  ngOnInit(): void {}

  onAddCard(form: NgForm) {
    console.log(form.value);

    const card = {
      nameOnCard: form.value.name,
      cardNumber: form.value.number,
      cardType: form.value.type.toUpperCase(),
      validityDate: form.value.date,
    };

    this.cardService.addCreditCard(card as CreditCard).subscribe((data) => {
      if (data) this.successful = true;
    });
  }
}
