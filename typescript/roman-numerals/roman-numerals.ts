

  const map:{[key:number]:{[key:number]:string}} = {
    0: {
      1:'I',
      5:'V',
    },
    1: {
      1:'X',
      5:'L',
    },
    2: {
      1:'C',
      5:'D',
    },
    3: {
      1:'M',
      5:'-'
    }
  }

  function getV(n:number): {d:number, z:number} {
    
    let s = n.toString(10);
    let ret = s.match(/\d/);
    let d: number = 0;
    if( ret ) {
      d = Number(ret[0]);

    }
    let z = s.length - 1;

    return {d: d, z: z};
  }



export const toRoman = (v: number): string => {
  let result = '';
  while( v > 0) {
    let ret = getV(v);
    if( ret.d <= 3) {
      result += map[ret.z][1].repeat(ret.d);
    } else if( ret.d === 4) {
      result += map[ret.z][1] + map[ret.z][5];
    } else if ( ret.d === 5 ) {
      result += map[ret.z][5];
    } else if ( ret.d <=8 ) {
      result += map[ret.z][5] + map[ret.z][1].repeat(ret.d - 5);
    } else if (ret.d === 9) {
      result += map[ret.z][1] + map[ret.z+1][1];
    }

    v = v - ret.d * 10 ** ret.z;
  }
  return result;
}

