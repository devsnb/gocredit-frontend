import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardType } from 'src/app/models/card-type';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditCardService } from 'src/app/services/credit-card.service';

interface CreditCardElement {
  cardId: number;
  nameOnCard: string;
  cardNumber: number;
  cardType: CardType;
  validityDate: string;
}

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.css'],
})
export class CreditCardsComponent implements OnInit {
  @Input()
  userId!: number;

  creditCards: CreditCard[] = [];

  displayedColumns: string[] = [
    'cardId',
    'nameOnCard',
    'cardNumber',
    'cardType',
    'validityDate',
  ];

  dataSource: CreditCardElement[] = [];

  constructor(private creditCardService: CreditCardService) {}

  ngOnInit(): void {
    console.log('User' + this.userId);
    this.creditCardService.getCardsByUserId(this.userId).subscribe((data) => {
      this.creditCards = data;
    });
  }
}
