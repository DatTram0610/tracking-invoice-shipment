// Models
import { Client } from './client';
import { Container } from './container';
import { InvoiceStatus } from './enum-status';

// Others
import { v4 as uuid } from 'uuid';

export class Invoice {
  invoiceId: string;
  status: InvoiceStatus;
  client: Client;
  container: Container[];
  createdDate: Date;
  constructor() {
    this.invoiceId = uuid();
    this.client = new Client();
    this.container = [];
    this.status = InvoiceStatus.InProgress;
    this.createdDate = new Date();
  }
}
