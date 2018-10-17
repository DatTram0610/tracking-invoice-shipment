import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

// Models
import { Container } from '../../models/container';

// Services
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {
  currentContainer: Container;
  containerId: number;
  dataSource: MatTableDataSource<Container>;
  displayedColumns: string[] = ['product/service', 'description', 'quantity', 'rate', 'amount', 'actions'];
  edittingPosition: number;

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.currentContainer = new Container();
    this.containerId = 1;
  }

  addContainer(): void {
    if (this.edittingPosition >= 0) {
      this.invoiceService.currentInvoice.container[this.edittingPosition] = this.currentContainer;
      this.edittingPosition = -1;
    } else {
      this.currentContainer.id = this.containerId;
      this.invoiceService.currentInvoice.container.push(this.currentContainer);
    }
    this.currentContainer = new Container();
    this.dataSource = new MatTableDataSource(this.invoiceService.currentInvoice.container);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  editContainer(element: Container, i: number): void {
    this.currentContainer = element;
    this.edittingPosition = i;
  }

  removeContainer(i: number): void {
    this.invoiceService.currentInvoice.container.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.invoiceService.currentInvoice.container);
  }
}
