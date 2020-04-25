import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // Later clientList will be catched after a GET clientList request is made. Any thing relies on
  // clientList will check the cach first before making a new request
  clientList: Client[] = [
    {
      id: '1',
      startDate: new Date('2015-04-25'),
      businessType: 'A',
      displayName: 'Bau',
      firstName: 'Daniel',
      lastName: 'Frank',
      email: 'danielf@gmail.com',
      phone: '3109721234',
      nameOnCheck: 'Company A',
      remark: 'Checkig Company A',
      billingAddress: {
        address1: '123 Main St',
        address2: 'Suite #135',
        city: 'Carson',
        state: 'CA',
        zipCode: '92345',
        country: 'US'
      },
      shippingAddress: {
        address1: '9802 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '90001'
      },
      createdDate: new Date('2015-04-25'),
      updatedDate: new Date('2015-03-25'),
      term: 1,
      taxIDType: 'A test',
      taxIDNumber: 'A test',
      accountNumber: 'A test',
      creditType: 'A test',
      creditLimit: 5651,
      paymentTerm: 'A test',
      creditHold: 'A test',
      notes: 'A test'
    },
    {
      id: '2',
      startDate: new Date('2015-04-25'),
      businessType: 'B',
      displayName: 'Hao',
      firstName: 'David',
      lastName: 'Muller',
      email: 'davidm@gmail.com',
      phone: '3109725678',
      nameOnCheck: 'Company B',
      remark: 'Checkig Company B',
      billingAddress: {
        address1: '456 Western St',
        address2: 'Suite #123',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789',
        country: 'US'
      },
      shippingAddress: {
        address1: '456 Western St',
        address2: 'Suite #333',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789',
        country: 'US'
      },
      createdDate: new Date('2015-04-25'),
      updatedDate: new Date('2015-03-25'),
      term: 1,
      taxIDType: 'A test',
      taxIDNumber: 'A test',
      accountNumber: 'A test',
      creditType: 'A test',
      creditLimit: 5651,
      paymentTerm: 'A test',
      creditHold: 'A test',
      notes: 'A test'
    },
    {
      id: '3',
      startDate: new Date('2015-04-25'),
      businessType: 'A',
      displayName: 'Cuong',
      firstName: 'Tin',
      lastName: 'Authur',
      email: 'tint@gmail.com',
      phone: '3109729010',
      nameOnCheck: 'Company C',
      billingAddress: {
        address1: '789 Marine St',
        address2: 'Suite #444',
        city: 'Irvine',
        state: 'CA',
        zipCode: '99012',
        country: 'US'
      },
      shippingAddress: {
        address1: '789 Marine St',
        address2: 'Suite #687',
        city: 'Irvine',
        state: 'CA',
        zipCode: '99012',
        country: 'US'
      },
      createdDate: new Date('2015-05-23'),
      updatedDate: new Date('2015-03-25'),
      term: 1,
      taxIDType: 'A test',
      taxIDNumber: 'A test',
      accountNumber: 'A test',
      creditType: 'A test',
      creditLimit: 5651,
      paymentTerm: 'A test',
      creditHold: 'A test',
      notes: 'A test'
    },
    {
      id: '4',
      startDate: new Date('2015-04-25'),
      businessType: 'A',
      displayName: 'Khuong',
      firstName: 'David',
      lastName: 'Muller',
      email: 'davidm@gmail.com',
      phone: '3109725678',
      nameOnCheck: 'Company B',
      billingAddress: {
        address1: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789'
      },
      shippingAddress: {
        address1: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789'
      },
      createdDate: new Date('2015-01-02'),
      updatedDate: new Date('2015-03-25'),
      term: 1,
      taxIDType: 'A test',
      taxIDNumber: 'A test',
      accountNumber: 'A test',
      creditType: 'A test',
      creditLimit: 5651,
      paymentTerm: 'A test',
      creditHold: 'A test',
      notes: 'A test'
    },
    {
      id: '5',
      startDate: new Date('2015-04-25'),
      businessType: 'A',
      displayName: 'Tin',
      firstName: 'David',
      lastName: 'Muller',
      email: 'davidm@gmail.com',
      phone: '3109725678',
      nameOnCheck: 'Company B',
      billingAddress: {
        address1: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789'
      },
      shippingAddress: {
        address1: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789'
      },
      createdDate: new Date('2014-02-24'),
      updatedDate: new Date('2015-03-25'),
      term: 1,
      taxIDType: 'A test',
      taxIDNumber: 'A test',
      accountNumber: 'A test',
      creditType: 'A test',
      creditLimit: 5651,
      paymentTerm: 'A test',
      creditHold: 'A test',
      notes: 'A test'
    },
    {
      id: '6',
      startDate: new Date('2015-04-25'),
      businessType: 'A',
      displayName: 'Vu',
      firstName: 'David',
      lastName: 'Muller',
      email: 'davidm@gmail.com',
      phone: '3109725678',
      nameOnCheck: 'Company B',
      billingAddress: {
        address1: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789'
      },
      shippingAddress: {
        address1: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789'
      },
      createdDate: new Date('2015-03-25'),
      updatedDate: new Date('2015-03-25'),
      term: 1,
      taxIDType: 'A test',
      taxIDNumber: 'A test',
      accountNumber: 'A test',
      creditType: 'A test',
      creditLimit: 5651,
      paymentTerm: 'A test',
      creditHold: 'A test',
      notes: 'A test'
    },
    {
      id: '7',
      startDate: new Date('2015-04-25'),
      businessType: 'A',
      displayName: 'Vinh',
      firstName: 'David',
      lastName: 'Muller',
      email: 'davidm@gmail.com',
      phone: '3109725678',
      nameOnCheck: 'Company B',
      billingAddress: {
        address1: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789'
      },
      shippingAddress: {
        address1: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789'
      },
      createdDate: new Date('2015-03-25'),
      updatedDate: new Date('2015-03-25'),
      term: 1,
      taxIDType: 'A test',
      taxIDNumber: 'A test',
      accountNumber: 'A test',
      creditType: 'A test',
      creditLimit: 5651,
      paymentTerm: 'A test',
      creditHold: 'A test',
      notes: 'A test'
    }
  ];
  currentClient: Client;
  constructor(private router: Router) {}

  getClients(): Client[] {
    return this.clientList;
  }

  setCurrentClient(client: Client): void {
    this.currentClient = client;
  }

  getCurrentClient(): Client {
    if (!this.currentClient) {
      this.router.navigate(['/clients']);
      return;
    }
    return this.currentClient;
  }

  // Update this function to make http request to delete cleint
  deleteClient(id: string): void {
    this.clientList = this.clientList.filter(client => {
      return client.id !== id;
    });
  }
  addClient(client: Client): boolean {
    this.clientList.push(client);
    return true; // change later when using a real db
  }

  updateClient(client: Client): boolean {
    this.clientList.push(client);
    return true;
  }
}
