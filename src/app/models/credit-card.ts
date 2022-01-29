import { Bill } from './bill';
import { CardType } from './card-type';
import { User } from './user';

export interface CreditCard {
  cardId: number;
  nameOnCard: string;
  cardNumber: number;
  cardType: CardType;
  validityDate: string;
  bill: Set<Bill>;
  user: User;
}
