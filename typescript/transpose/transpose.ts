export function transpose(m1: string[]): string[] {
  let xl = 0;
  let yl = m1.length;
  
  for(let row=0; row<yl; row++ ) {
    if( m1[row].length > xl) xl = m1[row].length;
  }


  let mr: string[][] = new Array(xl).fill([]).map(()=> new Array(yl).fill(''));
   for(let row = 0; row<yl; row++) {
     for( let col = 0; col<xl; col++) {
       mr[col][row] = m1[row][col];
     }
   }

   let result: string[] = [];

   for(let row=0;row<xl;row++) {
     result.push(mr[row].map((item,idx) => { return typeof item === "undefined" ? (mr[row].reduce((p,a,ci) => typeof a === 'undefined' ? p : ci,0) > idx ? " ": "") : item;}).join(''));
   }
   return result;
}

