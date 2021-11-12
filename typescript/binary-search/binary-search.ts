export function find(haystack: number[], needle: number, start: number = 0, end: number = -1): number | never {
  
  if( end === -1) end = haystack.length-1;
  let check = Math.floor((end-start) / 2 + start);
  if(haystack[check] === needle) return check;
  if( end - start > 0) {
    if(haystack[check] > needle) return find(haystack,needle,start,check);
    if(haystack[check] < needle) return find(haystack,needle,check + 1,end);
  }
  throw new Error('Value not in array');
}
