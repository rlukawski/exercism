interface Result {
  [key:string]: number,
}

export function nucleotideCounts(dna: string): Result {
  const result: Result = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  };
  dna.split('').forEach(letter =>  { 
    const l = letter.toUpperCase(); 
    if(l.match(/A|C|G|T/)) {
      result[l]++;
    } else {
      throw('Invalid nucleotide in strand')
    }
  });
  return result;
}
