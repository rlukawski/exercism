
export function bottle(index: number, uc = false): string {  
  let result = !index ? 'No more bottles of beer' : index===1 ? '1 bottle of beer' : index + ' bottles of beer';
  if( !uc) result = result.toLowerCase();
  return result;
}

export function verse(index: number): string {

  let pindex = index - 1;
  if( pindex < 0) pindex = 99;
  let result:string = `${bottle(index,true)} on the wall, ${bottle(index)}.`;
  if( !index) {
    result+=`\nGo to the store and buy some more, ${bottle(pindex)} on the wall.`;
  } else {
    result+=`\nTake ${index>1 ? 'one' : 'it'} down and pass it around, ${bottle(pindex)} on the wall.`
  }
  result+=`\n`;  
  return result;

}

export function sing(
  initialBottlesCount?: number,
  takeDownCount?: number
): string {
  let result:string[] = [];
  if( !initialBottlesCount)initialBottlesCount = 99;
  if( !takeDownCount)takeDownCount=0;
  for(let i = initialBottlesCount; i>=takeDownCount;i--) {
    result.push(verse(i));
  }
  return result.join("\n");
}
