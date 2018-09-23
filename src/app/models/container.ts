export class Container {
  id: number;
  product: string;
  description?: string;
  quantity: number;
  rate: number;
  amount: number;
  constructor() {
    this.id = null;
    this.product = null;
    this.quantity = null;
    this.rate = null;
    this.amount = null;
  }
}
