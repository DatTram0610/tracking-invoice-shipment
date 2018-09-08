import { Injectable } from '@angular/core';

// Models
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  invoices: Invoice[];
  constructor() {}

  addInvoice(invoice: Invoice): void {
    console.log('Submited Invoice:', invoice);
  }
}
