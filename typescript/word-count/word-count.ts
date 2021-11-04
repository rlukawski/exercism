interface Result {
  [key:string]: number
}

export function count(text: string): object {
  const result = new Map();

  text = text.trim();
  text = text.toLowerCase();
  text = text.replace(/\s+/g,' ');
  text = text.replace(/[.,]/g,'');
  const splitted = text.split(' ');
  splitted.forEach(element => {
    if( !result.get(element) ) {
      result.set(element,1);
    } else {
      result.set(element,result.get(element)+1);
    }
  });
  
  return result;
}

