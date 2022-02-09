import { Component, Input, OnInit } from '@angular/core';
import { CardType } from 'src/app/models/card-type';
import { CreditCard } from 'src/app/models/credit-card';
import { AuthService } from 'src/app/services/auth.service';
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
  userId!: any;

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
    private cardService: CreditCardService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe((user) => {
      this.userId = user?.userId;
    });
    this.userService.getByUserId(this.userId).subscribe((data) => {
      this.creditCards = data;
    });
  }

  onDelete(cardId: number) {
    this.cardService.deleteCreditCard(cardId);
  }
}
