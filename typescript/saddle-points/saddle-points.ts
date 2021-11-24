const check = (matrix: number[][], x:number, y:number): boolean => {
  let val = matrix[y][x];
  // check row
  for( let xt=0;xt<matrix[y].length;xt++) {
    if( matrix[y][xt] > val) {
      return false;
    }
  }

  //check column
  for( let yt=0;yt<matrix.length;yt++) {
    if( matrix[yt][x] < val) {
      return false;
    }
  }
  return true;

}

export function saddlePoints(matrix: number[][]):{row: number, column: number}[] {
  let result:{row:number, column:number}[] = [];
  for(let y=0; y<matrix.length;y++) {
    for(let x=0; x<matrix[y].length;x++) {
      if( check(matrix,x,y)) {
        result.push({row:y+1, column:x+1});
      }
    }
  }
  return result;
}

