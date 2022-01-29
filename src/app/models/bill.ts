import { CreditCard } from './credit-card';

export interface Bill {
  billId: number;
  billerName: string;
  date: string;
  amount: number;
  isPaid: boolean;
  creditCard: CreditCard;
}
