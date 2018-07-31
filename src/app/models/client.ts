import { Address } from './address';

export class Client {
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

    constructor() {
        this.displayName = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.nameOnCheck = '';
        this.billingAddress = new Address();
        this.shippingAddress = new Address();
    }
}
