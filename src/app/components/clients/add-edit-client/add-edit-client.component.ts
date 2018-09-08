import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { ClientService } from '../../../services/client.service';

// Models
import { Client } from '../../../models/client';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.less']
})
export class AddEditClientComponent implements OnInit {
  client: Client;
  sameAsBilling: Boolean = false;
  addClientError: Boolean = false;
  isAddingClient: boolean;
  submitButtonText: string;

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.client = this.clientService.getCurrentClient();
      this.isAddingClient = false;
      this.submitButtonText = 'Update Client';
    } else {
      this.client = new Client();
      this.isAddingClient = true;
      this.submitButtonText = 'Add Client';
    }
  }

  submitClient(): void {
    if (this.isAddingClient) {
      this.clientService.addClient(this.client);
    } else {
      this.clientService.updateClient(this.client);
    }
    // if (!this.clientService.addClient(this.client)) {
    //   this.addClientError = true;
    // } else {
    //   this.addClientError = false;
    //   this.router.navigate(['/clients']);
    // }
  }

  copyBilling(): void {
    if (!this.sameAsBilling) {
      this.client.shippingAddress = { ...this.client.billingAddress };
    } else {
      this.client.shippingAddress.address1 = '';
      this.client.shippingAddress.address2 = '';
      this.client.shippingAddress.city = '';
      this.client.shippingAddress.state = '';
      this.client.shippingAddress.zipCode = '';
    }
  }

  phoneChange(): void {
    // ToDo: format phone
  }

  billingAddress1Change(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.address1 = event.target.value;
    }
  }

  billingAddress2Change(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.address2 = event.target.value;
    }
  }

  billingCityChange(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.city = event.target.value;
    }
  }

  billingStateChange(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.state = event.target.value;
    }
  }

  billingZipCodeChange(event): void {
    if (this.sameAsBilling) {
      this.client.shippingAddress.zipCode = event.target.value;
    }
  }
}
