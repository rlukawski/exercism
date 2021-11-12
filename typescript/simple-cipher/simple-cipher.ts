export class SimpleCipher {
  readonly CODEA = 'a'.charCodeAt(0);
  readonly CHARACTERS = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  private _key: string;

  constructor(key: string = "") {
    if( key === "") {
      for(let i=0;i<100;i++ ) {
        let cn = String.fromCharCode(this.CODEA + Math.floor(Math.random() * (this.CHARACTERS)));
        key += cn;
      }
    }
    this._key = key;
  }

  get key(): string {
    return this._key;
  }
  encode(text: string, add: boolean = true): string {
    let p = 0;
    let result = '';
    for(let c of text) {
      let cstr = Number(c.charCodeAt(0) - this.CODEA);
      let ckey = Number(this._key[p++].charCodeAt(0) - this.CODEA);
      cstr = (add ? (cstr + ckey) : (cstr - ckey )) % (this.CHARACTERS);
      if(cstr < 0) cstr = this.CHARACTERS + cstr;
      result += String.fromCharCode(this.CODEA + cstr);
      if( p>=this._key.length ) p = 0;
    }
    return result;
  }

  decode(text: string): string {
    return(this.encode(text, false));
  }
}
