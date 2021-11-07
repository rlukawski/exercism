export function steps(count: number): number {
  let steps: number = 0;
  
  if( count<1) {
    throw('Only positive numbers are allowed');
  }
    
  while(count !== 1) {
    if( count % 2) {
      count = count * 3 + 1
    } else {
      count = count / 2;
    }
    steps++;
  }
  return steps;
}
