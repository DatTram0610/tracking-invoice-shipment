import { ContainerReleasement } from './container-releasement';
import { ContainerDelivery } from './container-delivery';
import { ContainerFee } from './container-fee';
import { TransportingProcess } from './transporting-process';
import { Measurement } from './measurement';

export class Container {
  id: number;
  product: string;
  description?: string;
  quantity: Measurement;
  weight: Measurement;
  dimension: Measurement;
  size: string;
  containerDelivery: ContainerDelivery;
  containerFee: ContainerFee;
  containerReleasement: ContainerReleasement;
  transportingProcess: TransportingProcess;
  constructor() {
    this.id = 1234;
    this.quantity = new Measurement();
    this.weight = new Measurement();
    this.dimension = new Measurement();
    this.size = 'test size';
    this.containerDelivery = new ContainerDelivery();
    this.containerFee = new ContainerFee();
    this.containerReleasement = new ContainerReleasement();
    this.transportingProcess = new TransportingProcess();
  }
}
