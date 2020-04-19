import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Models
import { Container } from '../../models/container/container';

// Enums
import { DimensionUnits, QuantityUnits, WeightUnits, FreightStatuses, CustomStatuses } from '../../models/enum';

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
  containerSizes: string[] = ['20', '40', '60', 'LCL'];
  dataSource: MatTableDataSource<Container>;
  displayedColumns: string[] = ['product/service', 'description', 'quantity', 'rate', 'amount', 'actions'];
  edittingPosition: number;
  // Enum
  dimensionUnits: { value: string; viewValue: string }[] = [
    {
      value: DimensionUnits[0],
      viewValue: DimensionUnits[0]
    }
  ];
  quantityUnits: { value: string; viewValue: string }[] = [
    {
      value: QuantityUnits[0],
      viewValue: QuantityUnits[0]
    },
    {
      value: QuantityUnits[1],
      viewValue: QuantityUnits[1]
    },
    {
      value: QuantityUnits[2],
      viewValue: QuantityUnits[2]
    }
  ];
  weightUnits: { value: string; viewValue: string }[] = [
    {
      value: WeightUnits[0],
      viewValue: WeightUnits[0]
    },
    {
      value: WeightUnits[1],
      viewValue: WeightUnits[1]
    }
  ];
  freightStatuses: { value: string; viewValue: string }[] = [
    {
      value: FreightStatuses[0],
      viewValue: FreightStatuses[0]
    },
    {
      value: FreightStatuses[1],
      viewValue: FreightStatuses[1]
    }
  ];
  customStatuses: { value: string; viewValue: string }[] = [
    {
      value: CustomStatuses[0],
      viewValue: CustomStatuses[0]
    },
    {
      value: CustomStatuses[1],
      viewValue: CustomStatuses[1]
    }
  ];

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.currentContainer = new Container();
    console.log(this.currentContainer);
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
