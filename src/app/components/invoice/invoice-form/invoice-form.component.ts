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
    this.invoice = new Invoice();
    this.container = new Container();
    this.isAddingContainer = false;
    this.isEditingContainer = false;
  }

  showNewContainerForm(): void {
    this.isAddingContainer = true;
    this.isEditingContainer = false;
  }

  addNewContainer(): void {
    this.isAddingContainer = false;
    this.invoice.container.push(this.container);
    this.container = new Container();
    console.log('Container:', this.invoice.container);
  }

  saveEditContainer() {
    this.invoice.container[this.currentEditingIndex] = this.container;
    this.container = new Container();
    this.isEditingContainer = false;
  }

  editContainer(index: number, container: Container): void {
    console.log('Editing Index:', index);
    this.isEditingContainer = true;
    this.isAddingContainer = false;
    this.container = container;
    this.currentEditingIndex = index;
  }

  removeContainer(index: number): void {
    console.log('Removing Index:', index);
    this.invoice.container.splice(index, 1);
    console.log('Container List:', this.invoice.container);
  }

  submitInvoice() {
    let invoiceNumber = 0;
    console.log(this.invoice);
    this.invoice.invoiceNumber = invoiceNumber;
    invoiceNumber++;
    this.invoiceService.addInvoice(this.invoice);
    this.invoice = new Invoice();
  }

  copyBilling(): void {
    if (!this.sameAsBilling) {
      this.client.shippingAddress = { ...this.client.billingAddress };
    } else {
      this.client.shippingAddress.address1 = '';
      this.client.shippingAddress.address2 = '';
      this.client.shippingAddress.city = '';
      this.client.shippingAddress.state = '';
      this.client.shippingAddress.zipCode = '';
    }
  }

  phoneChange(): void {
    // ToDo: format phone
  }

  billingAddress1Change(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.address1 = event.target.value;
    }
  }

  billingAddress2Change(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.address2 = event.target.value;
    }
  }

  billingCityChange(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.city = event.target.value;
    }
  }

  billingStateChange(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.state = event.target.value;
    }
  }

  billingZipCodeChange(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.zipCode = event.target.value;
    }
  }

  submitClient(): void {
    if (this.isAddingClient) {
      this.clientService.addClient(this.client);
    } else {
      this.clientService.updateClient(this.client);
    }
  }
}
