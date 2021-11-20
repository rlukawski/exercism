export function verse(i:number):string {
  let dictionary:{animal:string, v2: string, v3: string, stop: string}[] = [
    { animal: 'fly', v2:'', v3: '.', stop: ''},
    { animal: 'spider', v2: 'It wriggled and jiggled and tickled inside her.', v3:' that wriggled and jiggled and tickled inside her.', stop: ''},
    { animal: 'bird', v2: 'How absurd to swallow a bird!', v3:'.', stop: ''},
    { animal: 'cat', v2: 'Imagine that, to swallow a cat!', v3:'.', stop: ''},
    { animal: 'dog', v2: 'What a hog, to swallow a dog!', v3:'.', stop: ''},
    { animal: 'goat', v2: 'Just opened her throat and swallowed a goat!', v3:'.', stop: ''},
    { animal: 'cow', v2: 'I don\'t know how she swallowed a cow!', v3:'.', stop: ''},
    { animal: 'horse', v2: 'I don\'t know how she swallowed a cow!', v3:'.', stop: 'She\'s dead, of course!'}
  ]

  let result = '';

  result += `I know an old lady who swallowed a ${dictionary[i-1].animal}.\n`;
  if( dictionary[i-1].stop) {
    result += dictionary[i-1].stop + `\n`;
  } else {
    if( i>1 ) {
      result += `${dictionary[i-1].v2}\n`;
      for( let k = i-1; k>0; k--) {
        result += `She swallowed the ${dictionary[k].animal} to catch the ${dictionary[k-1].animal}`;
        result += dictionary[k-1].v3 + `\n`;
      }
    }
    result += `I don't know why she swallowed the ${dictionary[0].animal}. Perhaps she'll die.\n`;
  }
  return result;
}

export function verses(from:number, to:number): string {
  let ra: string[] = [];
  for( let i = from; i<=to; i++) {
    ra.push(verse(i));
  }
  return ra.join(`\n`);
}