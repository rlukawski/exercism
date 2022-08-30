export function calculatePrimeFactors(factor: number) {
  let divisor = 2;
  const result = [];

  while (factor > 1) {
    if (!(factor % divisor)) {
      factor = factor / divisor;
      result.push(divisor);
    } else {
      divisor++;
    }
  }
  return result;
}
