export class Triangle {
  sides: number[];
  constructor(...sides: number[]) {
    this.sides = sides;
  }

  get isTriangle(): boolean {
    return this.sides[0] + this.sides[1] >= this.sides[2] && this.sides[0] + this.sides[2] >= this.sides[1] && this.sides[1] + this.sides[2] >= this.sides[0] && this.sides[0]>0 && this.sides[1]>0 && this.sides[2]>0;
  }

  get isEquilateral(): boolean {
    return (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) && this.isTriangle;
  }

  get isIsosceles(): boolean {
    return (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] || this.sides[0] === this.sides[2]) && this.isTriangle;
  }

  get isScalene(): boolean {
    return (this.sides[0] !== this.sides[1] && this.sides[1]!==this.sides[2] && this.sides[2]!==this.sides[0]) && this.isTriangle;
  }
}
