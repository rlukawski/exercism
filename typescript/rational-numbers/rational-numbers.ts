export class Rational {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
    this.reduce();
  }

  add(y: Rational) {
    return new Rational((this.a * y.b + y.a * this.b),this.b * y.b);
  }

  sub(y: Rational) {
    return new Rational((this.a * y.b - y.a * this.b),this.b * y.b);
  }

  mul(y: Rational) {
    return new Rational(this.a * y.a,this.b * y.b);
  }

  div(y: Rational) {
    return new Rational(this.a * y.b,y.a * this.b);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }

  exprational(y: number): Rational {
    return new Rational(this.a ** y, this.b ** y);
  }

  expreal(y: number): number {
    return Number(Math.pow(y ** this.a,1/this.b).toPrecision(15));
  }

  gcd(a: number, b: number): number {
    return b ? this.gcd(b, a % b) : a;
  }

  reduce(): Rational {
    let maxd = this.gcd(this.a, this.b);
    this.a = this.a / maxd;
    this.b = this.b / maxd;
    
    this.a = this.a * Math.sign(this.b);
    this.b = Math.abs(this.b);
    return this;
  }
}
