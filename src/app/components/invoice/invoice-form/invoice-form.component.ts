import { Component, OnInit } from '@angular/core';

// Models
import { Client } from '../../../models/client';
import { Container } from '../../../models/container';
import { Invoice } from '../../../models/invoice';
import { InvoiceMode, ShipmentStatus, DevanningEnum } from '../../../models/enum';

// Services
import { ClientService } from '../../../services/client.service';
import { InvoiceService } from '../../../services/invoice.service';

// Others
import { Debounce } from '../../../helpers/debounce.helper';

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
  testText: string;

  sameAsBilling: Boolean = false;
  addClientError: Boolean = false;
  isAddingClient: boolean;
  submitButtonText: string;

  term: number[];
  modes: { value: string; viewValue: string }[] = [
    {
      value: InvoiceMode[0],
      viewValue: InvoiceMode[0]
    },
    {
      value: InvoiceMode[1],
      viewValue: InvoiceMode[1]
    }
  ];
  shipmentStatus: { value: string; viewValue: string }[] = [
    {
      value: ShipmentStatus[0],
      viewValue: ShipmentStatus[0]
    },
    {
      value: ShipmentStatus[1],
      viewValue: ShipmentStatus[1]
    }
  ];

  devanningOptions: { value: string; viewValue: string }[] = [
    {
      value: DevanningEnum[0],
      viewValue: DevanningEnum[0]
    },
    {
      value: DevanningEnum[1],
      viewValue: DevanningEnum[1]
    }
  ];

  searchClient = this.debounce.debounce(
    (clientName: string) => {
      this.searchedClients = [];
      this.isSearchingClient = true;
      if (clientName === '') {
        this.searchedClients = [];
        this.invoice.client = new Client();
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
    // this.invoice = this.invoiceService.currentInvoice;
    this.invoice = new Invoice();
    this.clientList = this.clientService.clientList;
    this.searchedClients = [];
    this.term = [1, 3, 7, 10, 15];
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
    this.testText = client.displayName;
    this.invoice.client = client;
  }

  submitClient(): void {
    if (this.isAddingClient) {
      this.clientService.addClient(this.client);
    } else {
      this.clientService.updateClient(this.client);
    }
  }
}
