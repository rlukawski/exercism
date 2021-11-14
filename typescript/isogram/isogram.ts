export function isIsogram(text: string): boolean {
  let map:{[key:string]: number} = {};
  text = text.toLowerCase().replace(/[^a-z]/,'');
  text.split('').forEach(letter => { map[letter] = map[letter] ? map[letter] + 1 : 1; });
  return Math.max(...Object.values(map)) <= 1 ;
}

console.log(isIsogram(''));
