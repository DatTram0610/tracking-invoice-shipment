// Models
import { Client } from './client';
import { Container } from './container/container';
import { InvoiceStatus, InvoiceMode, DevanningEnum } from './enum';

// Others
import { v4 as uuid } from 'uuid';

export class Invoice {
  carrier: string;
  client: Client;
  clientName: string;
  container: Container[];
  devanning?: DevanningEnum;
  entryDate: Date;
  estimatedLFD?: Date;
  eta: Date;
  // TODO:
  fileNumber: string;
  invoiceId: string;
  houseBL?: string;
  masterBL: string;
  mode: InvoiceMode;
  status: InvoiceStatus;
  terminal: string;
  constructor() {
    this.carrier = '';
    this.client = new Client();
    this.clientName = '';
    this.container = [];
    this.entryDate = new Date();
    this.eta = new Date();
    this.fileNumber = '';
    this.invoiceId = uuid();
    this.masterBL = '';
    this.mode = InvoiceMode.FCL;
    this.status = InvoiceStatus.InProgress;
    this.terminal = '';
  }
}
