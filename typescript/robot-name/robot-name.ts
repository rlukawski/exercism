const TOTAL_NUMBER_OF_NAMES = 26 * 26 * 10 * 10 * 10;

export class Robot {
  static usedNames: number[] = Array(TOTAL_NUMBER_OF_NAMES)
  currentName: string = '';

  public getNameByIndex(i: number): string {

    const ab = 'A'.charCodeAt(0);
    const nb = '0'.charCodeAt(0);

    const d2 = i % 10;
    const d1 = (i - d2) / 10 % 10; 
    const d0 = (i - d2 - d1 * 10) / 100 % 10; 
    const a1 = (i - d2 - d1 * 10 - d0 * 100) / 1000 % 26; 
    const a0 = (i - d2 - d1 * 10 - d0 * 100 - a1 * 1000) / 26000 % 26; 

    const name = String.fromCharCode(ab + a0) + String.fromCharCode(ab + a1) 
               + String.fromCharCode(nb + d0) + String.fromCharCode(nb + d1) + String.fromCharCode(nb + d2);

    return name;
  }


  private updateCurrentName() : void {
    let ridx: number = Math.floor(Math.random() * TOTAL_NUMBER_OF_NAMES);
    while(Robot.usedNames[ridx]) {
      ridx++;
      if( ridx >= TOTAL_NUMBER_OF_NAMES) {
        ridx = 0;
      }

    }
    Robot.usedNames[ridx] = 1;   
    this.currentName = this.getNameByIndex(ridx);
  }


  constructor() {
    this.updateCurrentName();
  }


  public get name(): string {
    return this.currentName;
  }


  public resetName(): void {
    this.updateCurrentName();
  }

  public static releaseNames(): void {
    Robot.usedNames = [];
  }
}
