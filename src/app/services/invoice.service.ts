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
  constructor() {
    this.currentInvoice = new Invoice();
  }

  addInvoice(invoice: Invoice): void {
    console.log('Submited Invoice:', invoice);
  }

  addContainer(container: Container): void {
    this.currentInvoice.container.push(container);
    console.log(this.currentInvoice.container);
  }

  getContainerList(): Container[] {
    return this.currentInvoice.container;
  }

  getCurrentInvoice(): Invoice {
    return this.currentInvoice;
  }
}
