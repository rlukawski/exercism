export class Board {
  board: string[];
  constructor(board: string[]) {
    this.board = board;
  }

  private check(x:number, y:number, c:string): string {


    if( y<0 || y>=this.board.length || x<0 || x>=this.board[y].length) {
      return '';
    }
    if( this.board[y][x] !== c) {
      return '';
    }
    let row = this.board[y].split('');
    row[x] = '!';
    this.board[y] = row.join('');
    
    if( y===(this.board.length - 1) && c==="O") {
      return c;
    }

    if( x===(this.board[y].length -1) && c==="X") {
      return c;
    }

    if( this.check(x-1,y-1,c) === c || 
        this.check(x+1,y-1,c) === c || 
        this.check(x-1,y+1,c)===c || 
        this.check(x+1,y+1,c) === c || 
        this.check(x+2,y,c) === c || 
        this.check(x-2,y,c) === c) {
      return c;
    }
    return '';
  }

  public winner(): string {
    let result:string[] = [];
    for(let x=0; x<this.board[0].length;x++ ) {
      if( this.check(x,0,"O")) {
        result.push("O");
      }
    }

    for( let y=0; y<this.board.length;y++) {
      if( this.check(y,y,"X")) {
        result.push("X");
      }
    }

    
    if( result.length === 1 ) {
      return result[0];
    } 
    return '';
    
  }
}
