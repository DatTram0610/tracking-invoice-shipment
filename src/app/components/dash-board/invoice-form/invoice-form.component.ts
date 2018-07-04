import { Component, OnInit } from '@angular/core';

import { Invoice } from '../../../models/invoice';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice;
  isAddingContainer: boolean;

  constructor() { }

  ngOnInit() {
    this.invoice = new Invoice();
    this.isAddingContainer = false;
  }

  addNewContainer() {
    this.isAddingContainer = true;
  }

  saveNewContainer() {
    this.isAddingContainer = false;
  }

  submitInvoice() {
    console.log(this.invoice);
  }
}
