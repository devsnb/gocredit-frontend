import { Component, Input, OnInit } from '@angular/core';
import { CardType } from 'src/app/models/card-type';
import { CreditCard } from 'src/app/models/credit-card';
import { UserService } from 'src/app/services/user.service';
import { CreditCardService } from '../../../services/credit-card.service';

interface CreditCardElement {
  cardId: number;
  nameOnCard: string;
  cardNumber: number;
  cardType: CardType;
  validityDate: string;
}

@Component({
  selector: 'app-display-credit-cards',
  templateUrl: './display-credit-cards.component.html',
  styleUrls: ['./display-credit-cards.component.css'],
})
export class DisplayCreditCardsComponent implements OnInit {
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

  constructor(
    private userService: UserService,
    private cardService: CreditCardService
  ) {}

  ngOnInit(): void {
    console.log('User' + this.userId);
    this.userService.getByUserId(1).subscribe((data) => {
      this.creditCards = data;
    });
  }

  onDelete(cardId: number) {
    this.cardService.deleteCreditCard(cardId);
  }
}
