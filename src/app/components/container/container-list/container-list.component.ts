import { Component, OnInit } from '@angular/core';

// Service
import { ContainerService } from '../../../services/container.service';

@Component({
    selector: 'app-container-list',
    templateUrl: './container-list.component.html',
    styleUrls: ['./container-list.component.less']
})
export class ContainerListComponent implements OnInit {
    constructor(private containerService: ContainerService) { }

    ngOnInit() {
        console.log('Container list:', this.containerService.getContainerList());
    }
}
