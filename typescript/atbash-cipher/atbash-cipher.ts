export function universal(text: string, space: boolean = false): string{
  let result = '';
  let source = text.toLowerCase().replace(/[^a-z0-9]/g,'').split('');
  let counter = 0;
  for( let i of source ) {
    if(i>='a' && i<="z") {
      i = String.fromCharCode('z'.charCodeAt(0) - (i.charCodeAt(0) - 'a'.charCodeAt(0)));
    }
    if( counter>4 && space) {
      result += " ";
      counter = 0;
    }
    result+=i;
    counter++;
  }
  return result;
}

export function encode(plainText: string): string { return universal(plainText,true);}
export function decode(cipherText: string): string { return universal(cipherText,false); }


