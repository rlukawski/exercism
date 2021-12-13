
function is_prime(n: number): boolean {
  if( n<=3) return true;
  for(let i=2;i<=n/2;i++) {
    if( !(n % i)) return false;
  }
  return true;
}

export function nth(n:number):number {
  let i = 1;
  let prime = 2;
  if( n <= 0) {
    throw('Prime is not possible');
  }
  while( i <= n) {
    if( is_prime(prime) ) {
      i++;
    }
    prime++;
  }
  return prime-1;
}
