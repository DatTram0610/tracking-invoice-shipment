import { Component, OnInit } from '@angular/core';

// Models
import { Client } from '../../../models/client';
import { Container } from '../../../models/container';
import { Invoice } from '../../../models/invoice';

// Services
import { ClientService } from '../../../services/client.service';
import { InvoiceService } from '../../../services/invoice.service';

// Others
import { Debounce } from '../../../helpers/debounce.helper';
import { v4 as uuid } from 'uuid';

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
  clientList: Client[];
  searchedClients: Client[];
  isSearchingClient: boolean;

  sameAsBilling: Boolean = false;
  addClientError: Boolean = false;
  isAddingClient: boolean;
  submitButtonText: string;

  searchClient = this.debounce.debounce(
    (clientName: string) => {
      console.log('Search term', clientName);
      this.searchedClients = [];
      this.isSearchingClient = true;
      if (clientName === '') {
        this.searchedClients = [];
      } else {
        for (const client of this.clientList) {
          if (client.displayName.toLocaleLowerCase().includes(clientName.toLowerCase())) {
            this.searchedClients.push(client);
          }
        }
      }
      console.log('Clients:', this.searchedClients);
    },
    300,
    false
  );

  constructor(
    private clientService: ClientService,
    private invoiceService: InvoiceService,
    private debounce: Debounce
  ) {}

  ngOnInit() {
    this.invoice = this.invoiceService.currentInvoice;
    this.clientList = this.clientService.clientList;
    this.searchedClients = [];
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

  selectClient(client: Client): void {
    this.isSearchingClient = false;
    this.invoice.client = client;
  }
}
