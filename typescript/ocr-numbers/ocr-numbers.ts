
type Number = string[];

const numbers:Number[] = [
  [' _ ',
   '| |',
   '|_|',
   '   '],
   ['   ',
    '  |',
    '  |',
    '   '],
   [' _ ',
    ' _|',
    '|_ ',
    '   '],

   [' _ ',
    ' _|',
    ' _|',
    '   '],
   ['   ',
    '|_|',
    '  |',
    '   '],
   [' _ ',
    '|_ ',
    ' _|',
    '   '],
   [' _ ',
    '|_ ',
    '|_|',
    '   '],
   [' _ ',
    '  |',
    '  |',
    '   '],
   [' _ ',
    '|_|',
    '|_|',
    '   '],
    [' _ ',
     '|_|',
     ' _|',
     '   '],
]


function detectNumber(arr:string[],x:number, y:number): string {
  
  let result:number = -1;
  for(let digit=0; digit<10; digit++) {
    
    for(let y1=0;y1<4;y1++) {
      if( arr[y+y1].substring(x,x+3) !== numbers[digit][y1]) { 
        break;
      }

      if( y1 === 3 ) {
        result = digit;
      
      }
    }
    if( result >= 0 ) {
      
      break;
    }
  }
  return result>=0 ? result.toString(10) : "?";
}

export function convert(s:string): string { 
  let arr:string[] = s.split("\n");
  console.log(arr);
  let result = "";
  let x=0;
  let y=0;
  while( y<arr.length && x<arr[y].length ) {
    result += detectNumber(arr,x,y);
    x+=3;
    if( x>=arr[y].length) {
      y+=4;
      x=0;
      if( y < arr.length) {
        result+=",";
      }
    }
  }
  return result;
}


