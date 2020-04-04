import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Services
import { InvoiceService } from '../../../services/invoice.service';

// Models
import { Invoice } from '../../../models/invoice';
import { InvoiceStatus } from 'src/app/models/enum-status';
import { InvoiceFormComponent } from '../invoice-form/invoice-form.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.less']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];
  displayedColumns: string[] = ['id', 'date', 'name', 'status', 'actions'];
  invoiceStatus: any;

  // Table
  dataSource: MatTableDataSource<Invoice>;
  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoices = this.invoiceService.getInvoiceList();
    this.invoiceStatus = {
      0: 'In Progress',
      1: 'Archived',
      2: 'Completed'
    };

    this.dataSource = new MatTableDataSource(this.invoiceService.getInvoiceList());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
