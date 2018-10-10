import { Component, OnInit } from '@angular/core';

// Models
import { Client } from '../../../models/client';
import { Container } from '../../../models/container';
import { Invoice } from '../../../models/invoice';

// Services
import { ClientService } from '../../../services/client.service';
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.less']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice;
  isAddingContainer: boolean;
  isEditingContainer: boolean;
  currentEditingIndex: number;
  container: Container;

  client: Client;
  sameAsBilling: Boolean = false;
  addClientError: Boolean = false;
  isAddingClient: boolean;
  submitButtonText: string;

  constructor(private clientService: ClientService, private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoice = this.invoiceService.currentInvoice;
  }

  submitInvoice() {
    // let invoiceNumber = 0;
    // console.log(this.invoice);
    // this.invoice.invoiceNumber = invoiceNumber;
    // invoiceNumber++;
    // this.invoiceService.addInvoice(this.invoice);
    // this.invoice = new Invoice();
    console.log('Container list:', this.invoiceService.currentInvoice);
  }

  copyBilling(): void {
    if (!this.sameAsBilling) {
      this.invoice.client.shippingAddress = { ...this.invoice.client.billingAddress };
    } else {
      this.invoice.client.shippingAddress.address1 = '';
      this.invoice.client.shippingAddress.address2 = '';
      this.invoice.client.shippingAddress.city = '';
      this.invoice.client.shippingAddress.state = '';
      this.invoice.client.shippingAddress.zipCode = '';
    }
  }

  phoneChange(): void {
    // ToDo: format phone
  }

  billingAddress1Change(event): void {
    if (this.sameAsBilling) {
      this.invoice.client.shippingAddress.address1 = event.target.value;
    }
  }

  billingAddress2Change(event): void {
    if (this.sameAsBilling) {
      this.invoice.client.shippingAddress.address2 = event.target.value;
    }
  }

  billingCityChange(event): void {
    if (this.sameAsBilling) {
      this.invoice.client.shippingAddress.city = event.target.value;
    }
  }

  billingStateChange(event): void {
    if (this.sameAsBilling) {
      this.invoice.client.shippingAddress.state = event.target.value;
    }
  }

  billingZipCodeChange(event): void {
    if (this.sameAsBilling) {
      this.invoice.client.shippingAddress.zipCode = event.target.value;
    }
  }
}
