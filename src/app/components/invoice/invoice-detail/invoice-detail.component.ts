import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Models
import { Invoice } from '../../../models/invoice';

// Services
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.less']
})
export class InvoiceDetailComponent implements OnInit {
  invoice: Invoice;
  invoiceId: string;

  constructor(private invoiceService: InvoiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('Params:', params);
      this.invoiceId = params.id;
      console.log('Invoice Id:', this.invoiceId);
    });
    this.invoice = this.getSelectedInvoice();
    console.log('Invoice:', this.invoice);
  }

  getSelectedInvoice(): Invoice {
    for (const invoice of this.invoiceService.getInvoiceList()) {
      if (invoice.invoiceId === this.invoiceId) {
        return invoice;
      }
    }
  }

}
