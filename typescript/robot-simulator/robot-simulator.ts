export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]

const VALID_DIRECTIONS: Direction[] = ['north','east','south','west'];

export class Robot {
  dir: Direction;
  pos: Coordinates;

  constructor() {
    this.dir = 'north';
    this.pos = [7,3];
  }
  get bearing(): Direction {
    return this.dir;
  }

  get coordinates(): Coordinates {
    return this.pos;
  }

  place({x,y,direction}: { x: number; y: number; direction: string }) {
    this.pos = [x,y];
    if( VALID_DIRECTIONS.includes(direction as Direction)) {
      this.dir = direction as Direction;
    } else {
      throw new InvalidInputError('Invalid Input');
    }
  
  }

  evaluate(instructions: string) {
    const seq = instructions.split('');
    for(let a of seq) {
      if( a === 'R' || a === 'L') {
        let idx: number = VALID_DIRECTIONS.findIndex(item => item === this.dir);
        a === 'R' ? idx++ : idx--;
        if( idx >= VALID_DIRECTIONS.length ) {
          idx = 0;
        } else if (idx < 0) {
          idx = VALID_DIRECTIONS.length -  1;
        }
        this.dir = VALID_DIRECTIONS[idx];
      }

      if( a === 'A') {
        switch(this.dir) {
          case 'north': 
            this.pos = [this.pos[0],this.pos[1]+1];
            break;
          case 'east':
            this.pos = [this.pos[0]+1,this.pos[1]];
            break;
          case 'south':
            this.pos = [this.pos[0],this.pos[1]-1];
            break;
         case 'west':
            this.pos = [this.pos[0]-1,this.pos[1]];
            break;
        }
      }
    }
  }
}
