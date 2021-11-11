const ScrabbleMapData:{[key:number]: string[]} = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'], 
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],   
  5: ['K'], 
  8: ['J', 'X'],  
  10: ['Q', 'Z'] 
}

function getPoints(c:string) {
  let points = 0;
  for(const i in ScrabbleMapData) {
    if(ScrabbleMapData[i].find(item => item === c.toUpperCase())) {
      points = Number(i);
      break;
    }
  }
  return points;
}

export function score(text: string| undefined) {
  let points = 0;
  if( typeof text === "string") {
    for( let c of text) {
     points+=getPoints(c);
    }
  }
  return points;
}
