function addChar(count: number, char: string): string {
  if (!count) return "";
  if (count === 1) {
    return `${char}`;
  } else {
    return `${count}${char}`;
  }
}

export function encode(data: string): string {
  let encoded = "";
  let lastChar = "";
  let cnt = 0;
  for (let pos = 0; pos < data.length; pos++) {
    let c = data[pos];
    if (cnt) {
      if (c === lastChar) {
        cnt++;
        continue;
      } else {
        encoded += addChar(cnt, lastChar);
      }
    }
    cnt = 1;
    lastChar = c;
  }
  encoded += addChar(cnt, lastChar);

  return encoded;
}

export function decode(data: string): string {
  let decoded = "";
  for (let pos = 0; pos < data.length; pos++) {
    let res = data.substr(pos).match(/^([0-9]+)([A-Za-z ])/);
    if (res) {
      decoded += res[2].repeat(Number(res[1]));
      pos += res[0].length - 1;
      continue;
    }
    res = data.substr(pos).match(/^([A-Za-z ])/);
    if (res) {
      decoded += res[1];
    }
  }

  return decoded;
}
