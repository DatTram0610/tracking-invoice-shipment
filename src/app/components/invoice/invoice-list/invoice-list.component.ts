import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

// Services
import { InvoiceService } from '../../../services/invoice.service';

// Models
import { Invoice } from '../../../models/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.less']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];
  displayedColumns: string[] = ['id', 'date', 'name', 'status'];
  invoiceStatus: any;

  // Table
  dataSource: MatTableDataSource<Invoice>;
  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private invoiceService: InvoiceService, private router: Router) {}

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

  selectInvoice(row: Invoice): void {
    this.router.navigate(['invoices/', row.invoiceId]);
  }
}
