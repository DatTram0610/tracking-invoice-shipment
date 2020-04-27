export class TransportingProcess {
  chasisNumber: string;
  perDiemDate: Date;
  chasisReturnDate: Date;
  newChasisNumber: string;
  emptyReturnDate: Date;
  detention: number;

  constructor() {
    this.chasisNumber = '';
    this.perDiemDate = new Date();
    this.chasisReturnDate = new Date();
    this.newChasisNumber = '';
    this.emptyReturnDate = new Date();
    this.detention = 0;
  }
}
