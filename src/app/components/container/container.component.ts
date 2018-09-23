import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

// Models
import { Container } from '../../models/container';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {
  currentContainer: Container;
  containerList: Container[];
  containerId: number;
  displayedColumns: string[] = ['product/service', 'description', 'quantity', 'rate', 'amount', 'actions'];

  constructor() {}

  ngOnInit(): void {
    this.currentContainer = new Container();
    this.containerList = [];
    this.containerId = 1;
  }

  addContainer(): void {
    this.currentContainer.id = this.containerId;
    this.containerList.push(this.currentContainer);
    console.log('Adding container:', this.containerList);
  }
}
