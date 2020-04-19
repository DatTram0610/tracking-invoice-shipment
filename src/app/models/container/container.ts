import { ContainerReleasement } from './container-releasement';
import { ContainerDelivery } from './container-delivery';
import { ContainerFee } from './container-fee';
import { TransportingProcess } from './transporting-process';

export class Container {
  id: number;
  product: string;
  description?: string;
  quantity: Measurement;
  weight: Measurement;
  dimention: Measurement;
  size: string;
  conatinerDelivery: ContainerDelivery;
  containerFee: ContainerFee;
  containerReleasement: ContainerReleasement;
  transportingProcess: TransportingProcess;
  constructor() {}
}
