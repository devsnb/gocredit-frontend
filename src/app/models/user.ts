import { Address } from './address';
import { CreditCard } from './credit-card';
import { Role } from './role';

export interface User {
  userId: number;
  name: string;
  dataOfBirth: string;
  email: string;
  password: string;
  contactNumber: number;
  role: Role;
  address: Address;
  creditcards: Set<CreditCard>;
}
