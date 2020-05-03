export class ContainerFee {
  trafficMitigationFee: number;
  nightGate: boolean;
  prepull: boolean;
  yardStorage: number;
  examFee: number;
  demurrage: number;
  perDiem: number;
  docsFee: number;

  constructor() {
    this.trafficMitigationFee = 0;
    this.nightGate = false;
    this.prepull = false;
    this.yardStorage = 0;
    this.examFee = 0;
    this.demurrage = 0;
    this.perDiem = 0;
    this.docsFee = 0;
  }
}
