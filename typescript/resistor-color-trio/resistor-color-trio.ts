
const colors:string[] = [
  "black","brown","red","orange","yellow","green","blue","violet","grey","white"
];

export function decodedResistorValue(c:string[]):string {
  const find = (c:string) => {
    return colors.findIndex((item) => item === c);
  }

  let n = find(c[0]) * 10 + find(c[1]);
  let m = 10 ** find(c[2]);
  n = n * m;
  let units = "ohms";
  if( n > 1000 ) {
    units = "kiloohms";
    n/=1000;
  }

  return `${n} ${units}`;
}
