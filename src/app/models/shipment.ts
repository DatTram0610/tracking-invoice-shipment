import { InvoiceMode, InvoiceStatus, DevanningEnum } from './enum';

export class Shipment {
  mode: InvoiceMode;
  fileNumber: string;
  carrier: string;
  status: InvoiceStatus;
  masterBL: string;
  houseBL?: string;
  terminal: string;
  expectedTimeOfArrival: Date;
  estLastFreeDay?: Date;
  entryDate: Date;
  devanning?: DevanningEnum;
  term: number;
  constructor() {
    this.mode = null;
    this.fileNumber = '';
    this.carrier = '';
    this.status = null;
    this.masterBL = '';
    this.terminal = '';
    this.expectedTimeOfArrival = new Date();
    this.entryDate = new Date();
    this.term = 0;
  }
}
