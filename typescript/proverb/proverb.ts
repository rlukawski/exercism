export function proverb(...words: string[]): string {
  let result = '';
  let idx = 0;
  while(idx + 1 < words.length) {
    result += `For want of a ${words[idx++]} the ${words[idx]} was lost.\n`;    
  }
  result += `And all for the want of a ${words[0]}.`
  return result;
}
