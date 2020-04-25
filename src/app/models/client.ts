import { Address } from './address';

// Others
import { v4 as uuid } from 'uuid';

export class Client {
  id: string;
  startDate: Date;
  businessType: string;
  title?: string;
  companyName?: string;
  displayName: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  suffix?: string;
  email: string;
  phone: string;
  mobilePhone?: string;
  remark?: string;
  fax?: string;
  otherContactInfo?: string;
  website?: string;
  nameOnCheck: string;
  isSubCustomer?: boolean;
  subCustomerParentName?: string;
  subCustomerBillWithParent?: string;
  billingAddress: Address;
  shippingAddress: Address;
  createdDate?: Date;
  updatedDate?: Date;
  containers?: string[];
  term: number;
  taxIDType: string;
  taxIDNumber: string;
  accountNumber: string;
  creditType: string;
  creditLimit: number;
  paymentTerm: string;
  creditHold: string;
  notes: string;

  constructor() {
    this.id = uuid();
    this.displayName = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.nameOnCheck = '';
    this.term = null;
    this.billingAddress = new Address();
    this.shippingAddress = new Address();
    this.taxIDType = null;
    this.creditType = null;
    this.startDate = new Date();
    this.creditHold = null;
  }
}
