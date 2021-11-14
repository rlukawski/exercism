export function clean(text: string): string {
  if( text.match(/[a-z]/) ) {
    throw('Letters not permitted');
  } 
  if( text.match(/[@:!]/) ) {
    throw('Punctuations not permitted');
  }   
  text = text.replace(/[^0-9]/g,'');
  if(text.length>11) {
    throw('More than 11 digits');
  }

  if( text.length<10) {
    throw('Incorrect number of digits');
  }
  if( text.length===11) {
    if( !text.match(/^1/)) {
      throw('11 digits must start with 1');
    }
    text = text.replace(/^1(.*)/,'$1');
  }
  let ret = text.match(/(\d)\d{2}(\d)\d{6}/);
  
  if( ret && ret.length > 2 ) {
    if( ret[1] === '0') {
      throw('Area code cannot start with zero');
    }
    if( ret[1] === '1') {
      throw('Area code cannot start with one');
    }  
    if( ret[2] === '0') {
      throw('Exchange code cannot start with zero');
    }
    if( ret[2] === '1') {
      throw('Exchange code cannot start with one');
    }    
  }
  
  return text;
}
