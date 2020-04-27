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
  businessType: string[];
  term: number[];
  taxIDType: string[];
  creditType: string[];
  paymentTerm: string[];
  creditHold: string[];

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
    this.businessType = ['Importer', 'Forwarder'];
    this.term = [1, 3, 7, 10, 15];
    this.taxIDType = ['EIN#', 'SSN#', 'ITIN#'];
    this.creditType = ['Excellent', 'Good', 'Fair', 'Bad', 'Risky'];
    this.paymentTerm = ['COD', '30 Day', '60 Day'];
    this.creditHold = ['No Holds', 'Yes/ Explain Below'];
  }

  submitClient(): void {
    if (this.isAddingClient) {
      this.clientService.addClient(this.client);
      this.router.navigate(['/clients']);
    } else {
      this.clientService.updateClient(this.client);
      this.router.navigate(['/clients']);
    }
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
}
