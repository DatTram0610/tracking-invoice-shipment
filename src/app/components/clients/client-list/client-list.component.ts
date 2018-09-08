import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

// Services
import { ClientService } from '../../../services/client.service';

// Models
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.less']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'name', 'email', 'actions'];
  dataSource: MatTableDataSource<Client>;

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.clientService.getClients());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  goToClientDetail(client: Client): void {
    this.clientService.setCurrentClient(client);
    this.router.navigate(['/clients', client.id]);
  }
}
