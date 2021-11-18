export class SpiralMatrix {
  size: number = 0;
  arr: number[][] = [];
  pos:{x:number,y:number} = {x:0,y:0};
  dir:{dx:number, dy:number} = {dx:0,dy:0};
  cnt: number = 0;

  constructor(n: number) {
    this.size = n;
  }

  getNext(): {x:number,y:number} {
    let p2 = {...this.pos};
    p2.x = p2.x + this.dir.dx;
    p2.y = p2.y + this.dir.dy;
    return p2;
  }

  rotateRight() {
    let newdir:{dx:number,dy:number} = {dx:0, dy:0};
    switch( true ) {
      case this.dir.dx === 1 && this.dir.dy === 0:
        newdir = {dx: 0, dy:-1};
        break;
      case this.dir.dx === 0 && this.dir.dy === -1:
        newdir = {dx:-1, dy:0};
        break;
      case this.dir.dx === -1 && this.dir.dy === 0:
        newdir = {dx:0, dy: 1}
        break;
      case this.dir.dx === 0 && this.dir.dy === 1:
        newdir = {dx:1, dy:0}
        break
    }
    this.dir = newdir;
  }

  isAvailable(pos: {x:number,y:number}):boolean {
    if( pos.x < 0 || pos.x>=this.size || pos.y<0 || pos.y>=this.size) return false;
    return this.arr[pos.x][pos.y]===undefined;
  }

  initData() {
    this.arr = [];
    for( let i=1; i<=this.size; i++ ) {
      this.arr.push(Array(this.size));
    } 
    this.pos = {x:0, y:0};
    this.dir = {dx:0, dy:1}
    this.cnt = 1;
  }

  getMatrix(): number[][] {
    this.initData();
    while( this.isAvailable(this.pos)) {
      this.arr[this.pos.x][this.pos.y] = this.cnt++;      
      if( !this.isAvailable(this.getNext())) {
        this.rotateRight();
      } 
      this.pos = this.getNext();
    
    }
    return this.arr;  
  }


}

export function ofSize(n: number): number[][] {
  return(new SpiralMatrix(n).getMatrix());
}

