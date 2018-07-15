export class Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country?: string;

  constructor() {
    this.street = null;
    this.city = null;
    this.state = null;
    this.zipcode = null;
  }
}
