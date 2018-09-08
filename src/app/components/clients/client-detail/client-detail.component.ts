import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { ClientService } from '../../../services/client.service';

// Models
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.less']
})
export class ClientDetailComponent implements OnInit {
  client: Client;
  isBillingAndShippingSame: boolean;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.client = this.clientService.getCurrentClient();
    this.isBillingAndShippingSame = this.compareBillingAndShippingAddress();
  }

  compareBillingAndShippingAddress(): boolean {
    return Object.is(this.client.billingAddress, this.client.shippingAddress);
  }

  editClient(): void {
    this.router.navigate(['/add-edit-client', this.client.id]);
  }

  deleteClient(): void {
    this.clientService.deleteClient(this.client.id);
    this.router.navigate(['/clients']);
  }
}
