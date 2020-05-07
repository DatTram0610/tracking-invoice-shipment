import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Services
import { ContainerService } from '../../../services/container.service';

// Models
import { Container } from '../../../models/container/container';

@Component({
    selector: 'app-container-list',
    templateUrl: './container-list.component.html',
    styleUrls: ['./container-list.component.less']
})
export class ContainerListComponent implements OnInit {
    containerList: Container[];

    // Table
    displayedColumns: string[] = ['product', 'description', 'lastFreeDay'];
    dataSource: MatTableDataSource<Container>;
    @ViewChild(MatSort)
    sort: MatSort;
    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    constructor(private containerService: ContainerService) { }

    ngOnInit() {
        this.containerList = this.containerService.getContainerList();
        console.log('Container list:', this.containerList);
        this.dataSource = new MatTableDataSource(this.containerList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    // TODO: Make sure to show correct remaining days
    getRemainingFreeDay(estFreeDate: Date): number {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const currentDate = new Date();
        const utc1 = Date.UTC(estFreeDate.getFullYear(), estFreeDate.getMonth(), estFreeDate.getDate());
        const utc2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
}
