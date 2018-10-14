import { Container } from './container';
import { Client } from './client';
import { v4 as uuid } from 'uuid';

export class Invoice {
  invoiceNumber: string;
  client: Client;
  container: Container[];
  constructor() {
    this.invoiceNumber = uuid();
    this.client = new Client();
    this.container = [];
  }
}
