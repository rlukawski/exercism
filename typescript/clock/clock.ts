export class Clock {

  minute: number;
  hour: number;
  constructor(hour: number, minute?: number) {
    this.minute = minute ? minute : 0;
    this.hour = hour;
  }

  private recalc() {
    let nm: number = this.minute % 60;
    if( nm < 0) {
      nm = 60 + nm;
    }
    let nh: number = (this.hour + ((this.minute - nm) / 60)) % 24;

    if( nh < 0) {
      nh = 24 + nh;
    }
    this.minute = nm;
    this.hour = nh;
  }

  public toString(): string {
    this.recalc();
    return ("0" + this.hour).slice(-2) + ":" + ("0" + this.minute).slice(-2);
  }

  public plus(minutes: number): Clock {
    this.minute += minutes;
    return this;
  }

  public minus(minutes: number): Clock {
    this.minute -= minutes;
    return this;
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
