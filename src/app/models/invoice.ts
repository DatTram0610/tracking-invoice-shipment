import { Container } from './container';
import { Client } from './client';

export class Invoice {
  invoiceNumber: number;
  client: Client;
  container: Container[];
  constructor() {
    this.invoiceNumber = null;
    this.client = new Client();
    this.container = [];
  }
}
