export class ContainerDelivery {
  eta: Date;
  disCharge: Date;
  lastFreeDay: Date;
  pickUpAndDeliveryDate: Date;
  pickUpAndDeliveryTime: string;
  demurrage: number;

  constructor() {
    this.eta = new Date();
    this.disCharge = new Date();
    this.lastFreeDay = new Date();
    this.pickUpAndDeliveryDate = new Date();
    this.pickUpAndDeliveryTime = null;
    this.demurrage = 0;
  }
}
