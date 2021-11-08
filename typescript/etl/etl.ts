interface old {
  [key:number]: string[]
}

interface upg {
  [key:string]: number;
}

export function transform(data_old: old): upg {
  let result: upg = {};

  for( let key in data_old ) {
    for( let letter of data_old[key]) {
      result[letter.toLowerCase()] = Number(key);
      
    }
  }
  return result
}

