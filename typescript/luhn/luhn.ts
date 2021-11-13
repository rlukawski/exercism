export function valid(digitString: string): boolean {
  let result: number[] = [];
  digitString = digitString.replace(/\s+/g,'');
  if( digitString.length < 2) return false;
  digitString.split('').reverse().forEach((c,i) => {
    let v = Number(c);
    if( i % 2) {
      v *= 2;
      if( v > 9) v = v - 9;
    } 
    result.unshift(v);
  });
  return (result.reduce((s,c) => s + c) % 10) === 0;
}


