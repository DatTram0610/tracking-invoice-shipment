import { Component, OnInit } from '@angular/core';

import { Invoice } from '../../../models/invoice';
import { Container } from '../../../models/container';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice;
  isAddingContainer: boolean;
  container: Container;

  constructor() {}

  ngOnInit() {
    this.invoice = new Invoice();
    this.container = new Container();
    this.isAddingContainer = false;
  }

  showNewContainerForm() {
    this.isAddingContainer = true;
  }

  saveNewContainer() {
    this.isAddingContainer = false;
    this.invoice.container.push(this.container);
    this.container = new Container();
    console.log('Container:', this.invoice.container);
  }

  submitInvoice() {
    console.log(this.invoice);
  }
}
