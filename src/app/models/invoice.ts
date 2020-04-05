// Models
import { Client } from './client';
import { Container } from './container';
import { InvoiceStatus, InvoiceMode, DevanningEnum } from './enum';

// Others
import { v4 as uuid } from 'uuid';
import { runInThisContext } from 'vm';

export class Invoice {
  carrier: string;
  clientName: string;
  container: Container[];
  devanning?: DevanningEnum;
  entryDate: Date;
  estimatedLFD?: Date;
  eta: Date;
  fileNumber: string;
  invoiceId: string;
  houseBL?: string;
  masterBL: string;
  mode: InvoiceMode;
  status: InvoiceStatus;
  terminal: string;
  constructor() {
    this.carrier = '';
    this.entryDate = new Date();
    this.eta = new Date();
    this.fileNumber = '';
    this.invoiceId = uuid();
    this.masterBL = '';
    this.mode = InvoiceMode.FCL;
    this.clientName = '';
    this.container = [];
    this.status = InvoiceStatus.InProgress;
    this.terminal = '';
  }
}
