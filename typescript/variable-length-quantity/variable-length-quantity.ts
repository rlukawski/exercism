

export function encode(numbers: number[]): number[] {
  let result: number[] = [];
  for(let i of numbers.reverse()) {
    let i2:bigint = BigInt(i);
    while( i2 ) {
      let part = i2 & 0x7fn;
      if( i2!==BigInt(i) ) part = part | 0x80n;
      i2 = i2 >> 7n;
      result.unshift(Number(part));
      
    }
    if( !i ) {
      result.unshift(Number(i2));
    }
  }
  return result;
}

export function decode(numbers:number[]):number[] {
  let result: number[] = [];
  let val:bigint = 0n;
  let lastOk = false;
  for(let i of numbers) {
    val = val + (BigInt(i & 0x7f));
    if( (i & 0x80)) {
      val = val << 7n;
      lastOk = false;
    } else {
      result.push(Number(val))
      val = 0n;
      lastOk = true;
    }
  }
  if( !lastOk) {
    throw('Incomplete sequence');
  }
  return result;
}
