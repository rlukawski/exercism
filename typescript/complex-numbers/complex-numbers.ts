export class ComplexNumber {

  private _real: number;
  private _imaginary: number;
  constructor(real: number, imaginary: number) {
    this._real = real;
    this._imaginary = imaginary;
  }

  public get real(): number {
    return this._real;
  }

  public get imag(): number {
    return this._imaginary;
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  public div(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber((this.real * other.real + this.imag * other.imag) / (other.real ** 2 + other.imag ** 2), (this.imag * other.real - this.real * other.imag) / (other.real ** 2 + other.imag ** 2));
  }

  public mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real * other.real - this.imag * other.imag, this.imag * other.real + this.real * other.imag);
  }

  public get abs(): Number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  public get exp(): ComplexNumber {
    return new ComplexNumber(Math.E ** this.real * Math.cos(this.imag),Math.E  ** this.real * Math.sin(this.imag));
  }

}
