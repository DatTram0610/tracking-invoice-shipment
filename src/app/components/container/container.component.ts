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
  containerList: Container[];
  containerId: number;
  dataSource: MatTableDataSource<Container>;
  displayedColumns: string[] = ['product/service', 'description', 'quantity', 'rate', 'amount', 'actions'];

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.currentContainer = new Container();
    this.containerList = [];
    this.containerId = 1;
  }

  addContainer(): void {
    this.currentContainer.id = this.containerId;
    this.containerList.push(this.currentContainer);
    this.dataSource = new MatTableDataSource(this.containerList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log('Adding container:', this.containerList);
  }
}
