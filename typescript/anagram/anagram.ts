export class Anagram {
  input: string;
  constructor(input: string) {
    this.input = input;
  }

  public compare(w1: string, w2: string): boolean {
    w1 = w1.toLowerCase();
    w2 = w2.toLowerCase();
    if( w1 === w2) return false;
    w1 = w1.split('').sort().join('');
    w2 = w2.split('').sort().join('');
    return w1 === w2;
  }

  public matches(...potentials: string[]): string[] {
    const result: string[] = [];
    potentials.forEach(word => {
      if(this.compare(this.input, word)) result.push(word);
    })
    return result;
  }
}
