export function recite(from: number, to: number): string {
  const elements:string[] = [
    'a Partridge',
    'two Turtle Doves',
    'three French Hens',
    'four Calling Birds',
    'five Gold Rings',
    'six Geese-a-Laying',
    'seven Swans-a-Swimming',
    'eight Maids-a-Milking',
    'nine Ladies Dancing',
    'ten Lords-a-Leaping',
    'eleven Pipers Piping',
    'twelve Drummers Drumming',
  ];

  const days:string[] = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth'
  ];

  let fr = '';

  for(let i = from; i<=to; i++) {
    let result = `On the ${days[i-1]} day of Christmas my true love gave to me: `;
    let parts: string[] = [];
    for(let k=i-1; k>=0; k--) {
      let add:string = elements[k];
      if( !k && i > 1) {
        add = `and ${add}`;
      }
      parts.push(add);
    }
    result += parts.join(', ');
    result += ` in a Pear Tree.`;
    fr += `${result}\n`;
  }
  return fr;
}
