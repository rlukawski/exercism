


export function count(data: string[]): number {
  let rows = data.length;
  let cols = 0;
  let rectangles = 0;
  if( rows ) {
    cols = data[0].length;
  }

  for( let y=0; y<rows;y++) {
    for( let x=0; x<cols;x++) {
      for( let y2=y+1; y2<rows;y2++) {
        for( let x2=x+1;x2<cols;x2++) {
          if( data[y][x] ===  "+" && data[y2][x2] === "+" && data[y][x2] === "+" && data[y2][x] === "+") {
            let ok = true;
            
            for(let xt=x+1; xt<x2;xt++) {
              if( data[y][xt] !== "-" && data[y][xt]!=="+") {
                ok = false;
              }
              if( data[y2][xt] !== "-" && data[y2][xt]!=="+") {
                ok = false;          
              }            
            }
            for(let yt=y+1; yt<y2;yt++) {
              if( data[yt][x] !== "|" && data[yt][x]!=="+") {
                ok = false;
              }
              if( data[yt][x2] !== "|" && data[yt][x2]!=="+") {
                ok = false;
              }              
            }
            if( ok ) {
              rectangles++;
            }
          }
        }
      }
    }
  }
  return rectangles;
}
