export const largestProduct = (text: string, n:number): number=> {
  if( text.match(/[^0-9]/g)) throw('Digits input must only contain digits');
  if( n > text.length) throw('Span must be smaller than string length');
  if( !n ) return 1; 
  if( n < 0 ) throw('Span must be greater than zero');
  
  let nmax = 0;
  for(let i = 0; i<=(text.length - n);i++) {
    let sub = text.substr(i,n).split('').map(item => Number(item)).reduce((a,c) => a * c);
    nmax = sub > nmax ? sub : nmax;
  }
  return nmax;
}
