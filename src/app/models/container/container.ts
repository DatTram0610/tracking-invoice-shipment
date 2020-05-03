import { ContainerReleasement } from './container-releasement';
import { ContainerDelivery } from './container-delivery';
import { ContainerFee } from './container-fee';
import { TransportingProcess } from './transporting-process';
import { Measurement } from './measurement';

export class Container {
  id: number;
  product: string;
  description: string;
  quantity: Measurement;
  weight: Measurement;
  dimension: Measurement;
  size: string;
  containerDelivery: ContainerDelivery;
  containerFee: ContainerFee;
  containerReleasement: ContainerReleasement;
  transportingProcess: TransportingProcess;
  constructor(it?: Container) {
    if (it) {
      this.id = it.id;
      this.quantity = it.quantity;
      this.weight = it.weight;
      this.dimension = it.dimension;
      this.size = it.size;
      this.containerDelivery = it.containerDelivery;
      this.containerFee = it.containerFee;
      this.containerReleasement = it.containerReleasement;
      this.transportingProcess = it.transportingProcess;
      this.description = it.description;
      this.product = it.product;
    } else {
      this.id = 1234;
      this.description = '';
      this.product = '';
      this.quantity = new Measurement();
      this.weight = new Measurement();
      this.dimension = new Measurement();
      this.size = '';
      this.containerDelivery = new ContainerDelivery();
      this.containerFee = new ContainerFee();
      this.containerReleasement = new ContainerReleasement();
      this.transportingProcess = new TransportingProcess();
    }
  }
}
