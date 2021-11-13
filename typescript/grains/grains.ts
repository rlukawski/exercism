export const square = (num: number): bigint => {
  if( num > 64) throw("error");
  return BigInt(2 ** (num-1));
}

export const total = (): bigint => {
  let sum = 0n;
  for(let i=1;i<=64;i++) {
    sum = sum + square(i);
  }
  return sum;
}
