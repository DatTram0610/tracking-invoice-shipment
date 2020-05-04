import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
  displayedColumns: string[] = ['id', 'entryDate', 'displayName', 'lastFreeDay', 'actions'];
  invoiceStatus: any;

  // Table
  dataSource: MatTableDataSource<Invoice>;
  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private invoiceService: InvoiceService) { }

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

  getRemainingFreeDay(estFreeDate: Date): number {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const currentDate = new Date();
    const utc1 = Date.UTC(estFreeDate.getFullYear(), estFreeDate.getMonth(), estFreeDate.getDate());
    const utc2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
}
