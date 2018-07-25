import { Component, OnInit } from '@angular/core';

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
  clients: Client[];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
    console.log('Clients:', this.clients);
  }

}
