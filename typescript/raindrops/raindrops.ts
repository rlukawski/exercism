export function convert(i: number): string {
  let result = "";
  if( !(i % 3)) result += "Pling";
  if( !(i % 5)) result += "Plang";
  if( !(i % 7)) result += "Plong";
  if( !result ) result = i.toString();
  return result;
}
 