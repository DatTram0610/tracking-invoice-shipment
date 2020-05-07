import { Injectable } from '@angular/core';

// Models
import { Container } from '../models/container/container';
import { Invoice } from '../models/invoice';

// Services
import { InvoiceService } from './invoice.service';

@Injectable({
    providedIn: 'root'
})
export class ContainerService {
    containerList: Container[] = [];

    constructor(private invoiceService: InvoiceService) { }

    getContainerList(): Container[] {
        const invoiceList = this.invoiceService.getInvoiceList();
        const containerList = this.extractContainersFromInvoices(invoiceList);
        return containerList;
    }

    private extractContainersFromInvoices(invoiceList: Invoice[]): Container[] {
        let containerList: Container[] = [];
        invoiceList.forEach((invoice: Invoice) => {
            if (invoice.containers?.length) {
                containerList = [...containerList, ...invoice.containers];
            }
        });
        return containerList;
    }
}
