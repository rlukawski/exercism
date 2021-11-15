import { resourceLimits } from "worker_threads";

export class Series {
  arr: number[];
  constructor(series: string) {
    this.arr = series.split('').map(l => Number(l));
    if( !this.arr.length) {
      throw('series cannot be empty');
    }
  }

  slices(sliceLength: number): number[][] {
    let result: number[][] = [];
    if( sliceLength > this.arr.length) {
      throw('slice length cannot be greater than series length');
    } else if ( !sliceLength) {
      throw('slice length cannot be zero');
    } else if( sliceLength < 0) {
      throw('slice length cannot be negative');
    }    
      for( let i=0; i<=this.arr.length - sliceLength; i++) {
        let tres: number[] = [];
        for( let i2 = 0; i2 < sliceLength; i2++) {
          tres.push(this.arr[i+i2]);
        }
        result.push(tres);
      }
    return result;
  }
}


