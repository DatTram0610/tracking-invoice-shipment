// Models
import { Client } from './client';
import { Container } from './container/container';
import { InvoiceStatus, InvoiceMode, DevanningEnum } from './enum';

// Others
import { v4 as uuid } from 'uuid';
import { Shipment } from './shipment';

export class Invoice {
  client: Client;
  shipment: Shipment;
  containers: Container[];
  constructor() {
    this.client = new Client();
    this.containers = [];
    this.shipment = new Shipment();
  }
}
