import { Container } from './container';

export class Invoice {
  clientFirstName: string;
  clientLastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  fee: number;
  container: Container[];
  constructor() {
    this.clientFirstName = null;
    this.clientLastName = null;
    this.address = null;
    this.city = null;
    this.state = null;
    this.zipCode = null;
    this.fee = null;
    this.container = [];
  }
}
