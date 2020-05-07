import { Injectable } from '@angular/core';

// Models
import { Invoice } from '../models/invoice';
import { Container } from '../models/container/container';
import { InvoiceStatus, InvoiceMode } from '../models/enum';
import { Client } from '../models/client';
import { Shipment } from '../models/shipment';
import { ContainerReleasement } from '../models/container/container-releasement';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  currentInvoice: Invoice;

  // NOTE: Fake data
  // TOTO: Replace this with real invoice data later
  // CONTINUE: Add more fake data for invoices
  invoice1: Invoice = new Invoice();
  invoice2: Invoice = new Invoice();
  invoice3: Invoice = new Invoice();
  invoice4: Invoice = new Invoice();
  client1: Client = new Client();
  client2: Client = new Client();
  client3: Client = new Client();
  client4: Client = new Client();
  shipment1: Shipment = new Shipment();
  shipment2: Shipment = new Shipment();
  shipment3: Shipment = new Shipment();
  shipment4: Shipment = new Shipment();
  container1: Container = new Container();
  container11: Container = new Container();
  container2: Container = new Container();
  container21: Container = new Container();
  container3: Container = new Container();
  container31: Container = new Container();
  container4: Container = new Container();
  container41: Container = new Container();
  invoiceList: Invoice[] = [];

  constructor() {
    this.currentInvoice = new Invoice();
    const currentDate = new Date();
    this.client1.firstName = 'Daniel';
    this.client1.lastName = 'Frank';
    this.client1.displayName = 'FreshFood INC.';
    this.client2.firstName = 'Oliver';
    this.client2.lastName = 'Smith';
    this.client2.displayName = 'BrandRoot';
    this.client3.firstName = 'Liam';
    this.client3.lastName = 'Jones';
    this.client3.displayName = 'HardStone LLC';
    this.client4.firstName = 'Lucas';
    this.client4.lastName = 'Davis';
    this.client4.displayName = 'Chemis Lab';
    this.shipment1.term = 30;
    this.shipment1.fileNumber = 'DFSD23SFs';
    this.shipment1.estLastFreeDay.setDate(currentDate.getDate() - 1);
    this.shipment2.term = 10;
    this.shipment2.fileNumber = 'XVSD34SDF';
    this.shipment2.estLastFreeDay.setDate(currentDate.getDate() - 3);
    this.shipment3.term = 15;
    this.shipment3.fileNumber = 'SFSF23SFS';
    this.shipment3.estLastFreeDay.setDate(currentDate.getDate() - 2);
    this.shipment4.term = 10;
    this.shipment4.fileNumber = 'ZZXV234FASF';
    this.shipment4.estLastFreeDay.setDate(currentDate.getDate() - 1);

    this.container1.product = 'Food';
    this.container1.description = 'Food products for Costco';
    this.container1.containerDelivery.lastFreeDay.setDate(currentDate.getDate() - 1);
    this.container11.product = 'Food';
    this.container11.description = 'Food products for Costco';
    this.container11.containerDelivery.lastFreeDay.setDate(currentDate.getDate() - 1);

    this.container2.product = 'Clothing Material';
    this.container2.description = 'Clothing Material for local manufacturer';
    this.container2.containerDelivery.lastFreeDay.setDate(currentDate.getDate() - 3);
    this.container21.product = 'Clothing Material';
    this.container21.description = 'Clothing Material for local manufacturer';
    this.container21.containerDelivery.lastFreeDay.setDate(currentDate.getDate() - 3);

    this.container3.product = 'Construction';
    this.container3.description = 'Construction material for BLD Construction LLC';
    this.container3.containerDelivery.lastFreeDay.setDate(currentDate.getDate() - 2);
    this.container31.product = 'Construction';
    this.container31.description = 'Construction material for BLD Construction LLC';
    this.container31.containerDelivery.lastFreeDay.setDate(currentDate.getDate() - 2);

    this.container4.product = 'Electrical Parts';
    this.container4.description = 'Electrical Parts for BestBuy';
    this.container4.containerDelivery.lastFreeDay.setDate(currentDate.getDate() - 1);
    this.container41.product = 'Electrical Parts';
    this.container41.description = 'Electrical Parts for BestBuy';
    this.container41.containerDelivery.lastFreeDay.setDate(currentDate.getDate() - 1);

    this.invoice1.client = this.client1;
    this.invoice1.shipment = this.shipment1;
    this.invoice1.containers = [this.container1, this.container11];
    this.invoice2.client = this.client2;
    this.invoice2.shipment = this.shipment2;
    this.invoice2.containers = [this.container2, this.container21];
    this.invoice3.client = this.client3;
    this.invoice3.shipment = this.shipment3;
    this.invoice3.containers = [this.container3, this.container31];
    this.invoice4.client = this.client4;
    this.invoice4.shipment = this.shipment4;
    this.invoice4.containers = [this.container4, this.container41];
    this.invoiceList = [this.invoice1, this.invoice2, this.invoice3, this.invoice4];
  }

  addInvoice(invoice: Invoice): void {
    this.invoiceList.push(invoice);
    console.log('Submited Invoice:', invoice);
  }

  getContainerList(): Container[] {
    return this.currentInvoice.containers;
  }

  getInvoiceList(): Invoice[] {
    return this.invoiceList;
  }
}
