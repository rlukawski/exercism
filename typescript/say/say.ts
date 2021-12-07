function triplet2String(n: number):string {
  let numeralsteen:string[] = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  
  let numerals10:string[] = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  let digits:string[] = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let rest = n % 100;
  let d = (n - rest)/100;
  let result: string[] = [];
  if( d > 0 ) {
    result.push(digits[d] + " hundred");
  }
  if( rest < 10 ) {
    if( rest > 0 || d === 0) {
      result.push(digits[rest]);
    }
  } else if( rest < 20) {
    result.push(numeralsteen[rest-10]);
  } else {
    let s = rest % 10;
    let h = (rest - s)/10;
    result.push(numerals10[h] + (s>0 ? "-" + digits[s]: ""));
  }
  return result.join(' ');
}

export function sayInEnglish(n: number):string  {
  let triplets: {add:string, triplet: number}[] = [];
  
  let numerals: string[] = [
    'thousand',
    'million',
    'billion',
  ];
  if( n<0 || n>999999999999) {
    throw('Number must be between 0 and 999,999,999,999.');
  }
  let idx = -1;
  while( n || !triplets.length ) {
    let rest = n % 1000;
    n = (n - rest)/ 1000;
    triplets.push({add:idx<0 ? '' : numerals[idx], triplet: rest});
    idx++;
  }

  let result:string[] = [];

  for( let i=0;i<triplets.length; i++) {
    
    if( triplets[i].add && triplets[i].triplet > 0) {
      result.push(triplets[i].add);
    }
    if( triplets[i].triplet > 0 || triplets.length===1) {
      result.push(triplet2String(triplets[i].triplet));
    }
  }
  return result.reverse().join(' ');
  
}
