
interface RNA {
  protein: string,
  codon: string[]
}


const rnamap: RNA[] = [
  {
    protein: 'Methionine',
    codon: ['AUG']
  },
  {
    protein: 'Phenylalanine',
    codon: ['UUU', 'UUC']
  },
  {
    protein: 'Leucine',
    codon: ['UUA', 'UUG']
  },
  {
    protein: 'Serine',
    codon: ['UCU', 'UCC','UCA','UCG']
  },
  {
    protein: 'Tyrosine',
    codon: ['UAU', 'UAC']
  },
  {
    protein: 'Cysteine',
    codon: ['UGU', 'UGC']
  },
  {
    protein: 'Tryptophan',
    codon: ['UGG']
  }, 
  {
    protein: "STOP",
    codon: ['UAA', 'UAG','UGA']
  }
]

export function translate(rna: string): string[] {
  let codons:string[] = [];
  let idx: number =  0;
  let result: string[] = [];

  for(let i=0; i<rna.length;i+=3) {
    codons.push(rna.substr(i,3))
  }

  while(idx<codons.length) {
    let protein: string = rnamap[rnamap.findIndex(item => item.codon.find(codon => codon === codons[idx] ))].protein;

    if( protein!=="STOP")
      result.push(protein);
    else 
      break;
    
    idx++;
  }
  
  return result;
}
