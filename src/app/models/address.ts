export class Address {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  constructor() {
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.zipCode = '';
  }
}
