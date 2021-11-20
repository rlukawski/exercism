export function isArmstrongNumber(number: number):boolean {
  let s:string = number.toString(10);
  return s.split('').map(i => Number(i) ** s.length).reduce((a,c) => a + c) === number;
}
