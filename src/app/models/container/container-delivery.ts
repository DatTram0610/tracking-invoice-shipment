export interface ContainerDelivery {
  eta: Date;
  disCharge: Date;
  lastFreeDay: Date;
  pickUpAndDeliveryDate: Date;
  pickUpAndDeliveryTime: string;
  demurrage: number;
}
