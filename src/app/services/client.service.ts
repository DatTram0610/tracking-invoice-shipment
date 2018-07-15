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
        street: '123 Main St',
        city: 'Carson',
        state: 'CA',
        zipcode: '92345'
      },
      shippingAddress : {
        street: '123 Main St',
        city: 'Carson',
        state: 'CA',
        zipcode: '92345'
      }
    },
    {
      displayName: 'Company B',
      firstName : 'David',
      lastName : 'Muller',
      email : 'davidm@gmail.com',
      phone : '3109725678',
      nameOnCheck : 'Company B',
      billingAddress : {
        street: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipcode: '96789'
      },
      shippingAddress : {
        street: '456 Western St',
        city: 'Hawthorne',
        state: 'CA',
        zipcode: '96789'
      }
    },
    {
      displayName: 'Company C',
      firstName : 'Tin',
      lastName : 'Authur',
      email : 'tint@gmail.com',
      phone : '3109729010',
      nameOnCheck : 'Company C',
      billingAddress : {
        street: '789 Marine St',
        city: 'Irvine',
        state: 'CA',
        zipcode: '99012'
      },
      shippingAddress : {
        street: '789 Marine St',
        city: 'Irvine',
        state: 'CA',
        zipcode: '99012'
      }
    }
  ];
  constructor() {}

  getClients(): Client[] {
    return this.clientList;
  }
}
