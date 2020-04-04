import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
  containerList: Container[];
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
    this.containerList = this.invoiceService.getContainerList();
    this.containerId = 1;
  }

  addContainer(): void {
    if (this.edittingPosition >= 0) {
      this.containerList[this.edittingPosition] = this.currentContainer;
      this.edittingPosition = -1;
    } else {
      this.currentContainer.id = this.containerId;
      this.containerList.push(this.currentContainer);
    }
    this.currentContainer = new Container();
    this.dataSource = new MatTableDataSource(this.containerList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  editContainer(element: Container, i: number): void {
    this.currentContainer = element;
    this.edittingPosition = i;
  }

  removeContainer(i: number): void {
    this.containerList.splice(i, 1);
    // this.invoiceService.currentInvoice.container.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.containerList);
  }
}
