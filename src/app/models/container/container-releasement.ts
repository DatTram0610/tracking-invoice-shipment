import { FreightStatuses, CustomStatuses } from '../enum';

export class ContainerReleasement {
  frieght: FreightStatuses;
  customs: CustomStatuses;
  remark: string;

  constructor() {
    this.frieght = 0;
    this.customs = 0;
    this.remark = '';
  }
}
