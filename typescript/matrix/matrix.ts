export class Matrix {
  matrix: number[][];
  
  constructor(text: string) {
    let arr = text.split('\n');
    // console.log(text);
    this.matrix = [];
    for(let i=0;i<arr.length;i++) {
      let items = arr[i].split(' ');
      this.matrix[i]=[];
      for(let k=0;k<items.length;k++) {
        this.matrix[i][k] = Number(items[k]);
      }
    }
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    const na: number[][] = [];
    
    for(let k=0; k<this.matrix[0].length;k++) {
      na[k] = [];
    }
    
    for(let i=0; i<this.matrix.length;i++) {
      for(let k=0; k<this.matrix[i].length;k++) {
        na[k][i] = this.matrix[i][k];
      }
    }
    return na;
  }
}
