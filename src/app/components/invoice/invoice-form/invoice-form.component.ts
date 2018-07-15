import { Component, OnInit } from '@angular/core';

// Models
import { Invoice } from '../../../models/invoice';
import { Container } from '../../../models/container';

// Services
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice;
  isAddingContainer: boolean;
  isEditingContainer: boolean;
  currentEditingIndex: number;
  container: Container;

  constructor(private invoiceService: InvoiceService) {}

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
}
