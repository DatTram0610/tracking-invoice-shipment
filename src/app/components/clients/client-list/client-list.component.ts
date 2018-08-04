import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
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
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Client>();

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.data = this.clientService.getClients();
    this.displayedColumns = ['date', 'name', 'email', 'detail'];
    console.log('Clients:', this.dataSource.data);
  }

  goToClientDetail(client: Client): void {
    console.log(client);
    this.clientService.setCurrentClient(client);
    this.router.navigate(['/clients', client.id]);
  }
}
