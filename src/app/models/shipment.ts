import { InvoiceMode, InvoiceStatus, DevanningEnum } from "./enum";

export class Shipment {
    mode: InvoiceMode;
    carrier: string;
    status: InvoiceStatus;
    masterBL: string;
    houseBL?: string;
    terminal: string;
    expectedTimeOfArrival: Date;
    estLastFreeDay?: Date;
    entryDate: Date;
    devanning?: DevanningEnum;

    constructor() {
        this.mode = null;
        this.carrier = '';
        this.status = null;
        this.masterBL = '';
        this.terminal = '';
        this.expectedTimeOfArrival = new Date();
        this.entryDate = new Date();
    }
}