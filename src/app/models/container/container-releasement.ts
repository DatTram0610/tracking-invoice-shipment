import { FreightStatuses, CustomStatuses } from '../enum';

export interface ContainerReleasement {
  frieght: FreightStatuses;
  customs: CustomStatuses;
  remark: string;
}
