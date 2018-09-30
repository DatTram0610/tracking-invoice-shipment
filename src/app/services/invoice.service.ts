import { Injectable } from '@angular/core';

// Models
import { Invoice } from '../models/invoice';
import { Container } from '../models/container';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  currentInvoice: Invoice;
  invoices: Invoice[];
  constructor() {}

  addInvoice(invoice: Invoice): void {
    console.log('Submited Invoice:', invoice);
  }

  addContainers(containers: Container[]): void {
    this.currentInvoice.container = containers;
    console.log(this.currentInvoice.container);
  }
}
