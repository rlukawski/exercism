export function compute(left: string, right: string): number {
  let distance = 0;
  if( left.length !== right.length) {
    throw('DNA strands must be of equal length.');
  }
  for(let p in left.split('')) {
    if( left[p] !== right[p]) distance++;
  }
  return distance;
}

