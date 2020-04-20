import { Injectable } from '@angular/core';

// Models
import { Invoice } from '../models/invoice';
import { Container } from '../models/container/container';
import { InvoiceStatus, InvoiceMode } from '../models/enum';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  currentInvoice: Invoice;
  // invoices: Invoice[] = [
  //   {
  //     carrier: 'USPS',
  //     client: {
  //       id: '2',
  //       displayName: 'Hao',
  //       firstName: 'David',
  //       lastName: 'Muller',
  //       email: 'davidm@gmail.com',
  //       phone: '3109725678',
  //       nameOnCheck: 'Company B',
  //       billingAddress: {
  //         address1: '456 Western St',
  //         address2: 'Suite #123',
  //         city: 'Hawthorne',
  //         state: 'CA',
  //         zipCode: '96789',
  //         country: 'US'
  //       },
  //       shippingAddress: {
  //         address1: '456 Western St',
  //         address2: 'Suite #333',
  //         city: 'Hawthorne',
  //         state: 'CA',
  //         zipCode: '96789',
  //         country: 'US'
  //       },
  //       createdDate: new Date('2015-04-25'),
  //       updatedDate: new Date('2015-03-25'),
  //       term: 1
  //     },
  //     clientName: 'Daniel',
  //     container: [
  //       {
  //         amount: 1,
  //         description: 'Test container',
  //         id: 1,
  //         product: 'Test product',
  //         quantity: 1,
  //         rate: 1
  //       }
  //     ],
  //     entryDate: new Date(),
  //     eta: new Date(),
  //     fileNumber: '123abc',
  //     invoiceId: 'SD12sDFSDFfd343',
  //     masterBL: 'MasterBL',
  //     mode: InvoiceMode.FCL,
  //     status: InvoiceStatus.InProgress,
  //     terminal: '4'
  //   }
  //   // {
  //   //   invoiceId: 'FKGDFG3124D!DD',
  //   //   status: InvoiceStatus.InProgress,
  //   //   createdDate: new Date(),
  //   // client: {
  //   //   id: '2',
  //   //   displayName: 'Hao',
  //   //   firstName: 'David',
  //   //   lastName: 'Muller',
  //   //   email: 'davidm@gmail.com',
  //   //   phone: '3109725678',
  //   //   nameOnCheck: 'Company B',
  //   //   billingAddress: {
  //   //     address1: '456 Western St',
  //   //     address2: 'Suite #123',
  //   //     city: 'Hawthorne',
  //   //     state: 'CA',
  //   //     zipCode: '96789',
  //   //     country: 'US'
  //   //   },
  //   //   shippingAddress: {
  //   //     address1: '456 Western St',
  //   //     address2: 'Suite #333',
  //   //     city: 'Hawthorne',
  //   //     state: 'CA',
  //   //     zipCode: '96789',
  //   //     country: 'US'
  //   //   },
  //   //   createdDate: new Date('2015-04-25'),
  //   //   updatedDate: new Date('2015-03-25'),
  //   //   term: 1
  //   // },
  //   //   container: [
  //   //     {
  //   //       amount: 2,
  //   //       description: 'Test container',
  //   //       id: 1,
  //   //       product: 'Test product',
  //   //       quantity: 1,
  //   //       rate: 2
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   invoiceId: 'IBKFJ424GDFGJJ9',
  //   //   status: InvoiceStatus.Completed,
  //   //   createdDate: new Date(),
  //   //   client: {
  //   //     id: '3',
  //   //     displayName: 'Cuong',
  //   //     firstName: 'Tin',
  //   //     lastName: 'Authur',
  //   //     email: 'tint@gmail.com',
  //   //     phone: '3109729010',
  //   //     nameOnCheck: 'Company C',
  //   //     billingAddress: {
  //   //       address1: '789 Marine St',
  //   //       address2: 'Suite #444',
  //   //       city: 'Irvine',
  //   //       state: 'CA',
  //   //       zipCode: '99012',
  //   //       country: 'US'
  //   //     },
  //   //     shippingAddress: {
  //   //       address1: '789 Marine St',
  //   //       address2: 'Suite #687',
  //   //       city: 'Irvine',
  //   //       state: 'CA',
  //   //       zipCode: '99012',
  //   //       country: 'US'
  //   //     },
  //   //     createdDate: new Date('2015-05-23'),
  //   //     updatedDate: new Date('2015-03-25'),
  //   //     term: 1
  //   //   },
  //   //   container: [
  //   //     {
  //   //       amount: 3,
  //   //       description: 'Test container',
  //   //       id: 1,
  //   //       product: 'Test product',
  //   //       quantity: 3,
  //   //       rate: 9
  //   //     }
  //   //   ]
  //   // }
  // ];
  constructor() {
    this.currentInvoice = new Invoice();
  }

  addInvoice(invoice: Invoice): void {
    console.log('Submited Invoice:', invoice);
  }

  addContainer(container: Container): void {
    this.currentInvoice.containers.push(container);
    console.log('Current invoice:', this.currentInvoice.containers);
  }

  getContainerList(): Container[] {
    return this.currentInvoice.containers;
  }

  getInvoiceList(): Invoice[] {
    // return this.invoices;
    return [];
  }
}
