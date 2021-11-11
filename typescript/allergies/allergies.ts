const allegrenMap = ["eggs","peanuts","shellfish","strawberries", "tomatoes","chocolate","pollen","cats"];

export class Allergies {
  idx: number;
  constructor(allergenIndex: number) {
    this.idx = allergenIndex;
  }

  public list(): string[] {
    let result = [];
    for(let i=0; i<allegrenMap.length;i++) {
      if( this.idx & 2 ** i) {
        result.push(allegrenMap[i]);
      }
    }
    return result;
  }

  public allergicTo(allergen: string): boolean {
    const idx = allegrenMap.findIndex(item => allergen === item);
    return (idx>=0) && (this.idx & 2 ** idx ) > 0;
  }
}
