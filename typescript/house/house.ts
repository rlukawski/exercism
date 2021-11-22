export function verse(num: number): string[] {
  let map:{base:string, variety:string}[] = [
    {base: 'This is the house that Jack built.', variety: 'that lay in the house that Jack built.'},
    {base: 'This is the malt', variety: 'that ate the malt'},
    {base: 'This is the rat', variety: 'that killed the rat'},
    {base: 'This is the cat', variety: 'that worried the cat'},
    {base: 'This is the dog', variety: 'that tossed the dog'},
    {base: 'This is the cow with the crumpled horn', variety: 'that milked the cow with the crumpled horn'},
    {base: 'This is the maiden all forlorn', variety: 'that kissed the maiden all forlorn'},
    {base: 'This is the man all tattered and torn', variety: 'that married the man all tattered and torn'},
    {base: 'This is the priest all shaven and shorn', variety: 'that woke the priest all shaven and shorn'},
    {base: 'This is the rooster that crowed in the morn', variety: 'that kept the rooster that crowed in the morn'},
    {base: 'This is the farmer sowing his corn', variety: 'that belonged to the farmer sowing his corn'},
    {base: 'This is the horse and the hound and the horn', variety: ''},
  ]
  let result: string[] = [];
  for(let i=num-1;i >= 0;i--) {
    result.push(i === num -1 ? map[i].base : map[i].variety)
  }
  return result;
}

export function verses(start: number, end: number): string[] {
  let result: string[] = [];
  for( let i=start; i<=end; i++ ) {
    result = result.concat(verse(i));
    if( i < end) {
      result.push('');
    }
  }
  return result;
}
