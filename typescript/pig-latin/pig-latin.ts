export function translateW(text: string):string {
  if( text.match(/^(ch|qu)/)) {
    return text.replace(/^(ch|qu)(.*)/,'$2$1ay');
  }

  if( text.match(/^([aeiou])/) ) {
    return text.replace(/^([aeiou].*)/,'$1ay');
  }

  if( text.match(/^[^aeiou]/) ) {  
    if( text.match(/^[^aeiou]qu/)) {
      return text.replace(/^([^aeiou]qu)(.*)/,'$2$1ay')
    }
    if( text.match(/^th/)) {
      return text.replace(/^(th[r]*)(.*)/,'$2$1ay')
    }
    if( text.match(/^sch/)) {
      return text.replace(/^(sch)(.*)/,'$2$1ay')
    }
    return text.replace(/^([^aeiou])(.*)/,'$2$1ay');
  }
  return text;
}

export function translate(text: string): string {
  return text.split(' ').map(item => translateW(item)).join(' ');
}
