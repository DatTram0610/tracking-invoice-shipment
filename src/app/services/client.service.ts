import { Injectable } from '@angular/core';

// Models
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientList: Client[] = [
    {
      displayName: 'Company A',
      firstName : 'Daniel',
      lastName : 'Frank',
      email : 'danielf@gmail.com',
      phone : '3109721234',
      nameOnCheck : 'Company A',
      billingAddress : {
        address1: '123 Main St',
        address2: 'Suite #135',
        city: 'Carson',
        state: 'CA',
        zipCode: '92345',
        country: 'US'
      },
      shippingAddress : {
        address1: '123 Main St',
        address2: 'Suite #199',
        city: 'Carson',
        state: 'CA',
        zipCode: '92345',
        country: 'US'
      },
      createdDate: new Date('2015-03-25'),
      updatedDate: new Date('2015-03-25')
    },
    {
      displayName: 'Company B',
      firstName : 'David',
      lastName : 'Muller',
      email : 'davidm@gmail.com',
      phone : '3109725678',
      nameOnCheck : 'Company B',
      billingAddress : {
        address1: '456 Western St',
        address2: 'Suite #123',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789',
        country: 'US'
      },
      shippingAddress : {
        address1: '456 Western St',
        address2: 'Suite #333',
        city: 'Hawthorne',
        state: 'CA',
        zipCode: '96789',
        country: 'US'
      },
      createdDate: new Date('2015-03-25'),
      updatedDate: new Date('2015-03-25')
    },
    {
      displayName: 'Company C',
      firstName : 'Tin',
      lastName : 'Authur',
      email : 'tint@gmail.com',
      phone : '3109729010',
      nameOnCheck : 'Company C',
      billingAddress : {
        address1: '789 Marine St',
        address2: 'Suite #444',
        city: 'Irvine',
        state: 'CA',
        zipCode: '99012',
        country: 'US'
      },
      shippingAddress : {
        address1: '789 Marine St',
        address2: 'Suite #687',
        city: 'Irvine',
        state: 'CA',
        zipCode: '99012',
        country: 'US'
      },
      createdDate: new Date('2017-04-13'),
      updatedDate: new Date('2017-04-14')
    }
  ];
  constructor() {}

  getClients(): Client[] {
    return this.clientList;
  }

  addClient(client: Client): boolean {
    this.clientList.push(client);
    return true; // change later when using a real db
  }

}
