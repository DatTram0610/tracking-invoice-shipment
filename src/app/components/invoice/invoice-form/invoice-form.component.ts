import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Client } from '../../../models/client';
import { Container } from '../../../models/container/container';
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
  displayName: string;

  sameAsBilling: Boolean = false;
  addClientError: Boolean = false;
  isAddingClient: boolean;
  submitButtonText: string;

  term: number[];
  modes: { value: number; viewValue: string }[] = [
    {
      value: InvoiceMode.FCL,
      viewValue: InvoiceMode[0]
    },
    {
      value: InvoiceMode.LCL,
      viewValue: InvoiceMode[1]
    }
  ];
  shipmentStatus: { value: number; viewValue: string }[] = [
    {
      value: ShipmentStatus.Hot,
      viewValue: ShipmentStatus[0]
    },
    {
      value: ShipmentStatus.Standard,
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
    private debounce: Debounce,
    private router: Router
  ) { }

  ngOnInit() {
    // this.invoice = this.invoiceService.currentInvoice;
    this.invoice = new Invoice();
    this.clientList = this.clientService.clientList;
    this.searchedClients = [];
    this.term = [1, 3, 7, 10, 15];
  }

  // TODO: Change this.invoiceService.addInvoice to submitInvoice and navigate to home page. 
  // After this, create tabs for list of containers and invoices
  submitInvoice() {
    // let invoiceNumber = 0;
    // console.log(this.invoice);
    // this.invoice.invoiceNumber = invoiceNumber;
    // invoiceNumber++;
    // this.invoiceService.addInvoice(this.invoice);
    // this.invoice = new Invoice();
    console.log('Container list:', this.invoice);
    this.invoiceService.addInvoice(this.invoice);
    this.router.navigate(['/']);
  }

  addNewContainer(data: Container): void {
    this.invoice.containers.push(data);
  }

  editContainer(data: { container: Container; index: number }): void {
    this.invoice.containers[data.index] = data.container;
  }
}
