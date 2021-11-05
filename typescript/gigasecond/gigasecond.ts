export class Gigasecond {
  currentDate: Date;
  constructor(currentDate: Date) {
    this.currentDate = currentDate;
  }
  public date(): Date {
    let dt = new Date();
    dt.setTime(this.currentDate.getTime() + Math.pow(10,9) * 1000);
    return dt;
  }
}
