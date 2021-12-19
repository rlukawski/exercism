type Letters = {[key:string]:number};

function sumWords(dictionary:Letters, words: string[]): number {
  let mywords = [...words];
  for(let l in dictionary) {
    for( let idx in mywords) {
      let re = new RegExp(l,"g");
      mywords[idx] = mywords[idx].replace(re,String(dictionary[l]));
    }
  }

  let sum = 0;
  for( let word of mywords) {
    sum+=Number(word);
  }
  
  return sum;
}


function checkPuzzle(dictionary:Letters, wl:string[],wr:string[]) {
  for(let word of wl) {
    if( dictionary[word[0]]===0) {
      return false;
    }
  }
  for(let word of wr) {
    if( dictionary[word[0]]===0) {
      return false;
    }
  }  
  if( sumWords(dictionary,wl) === sumWords(dictionary,wr)) {
    return true;
  }
  return false;
}

function generatePermutations(result:Letters[],dictionary:Letters,idx:number = 0, list:number[]=[0,1,2,3,4,5,6,7,8,9]) {


  for( let np in list ) {
    let key = Object.keys(dictionary)[idx];
    dictionary[key] = list[np];
    
    if( idx<Object.keys(dictionary).length -1 ) {
      generatePermutations(result,dictionary,idx+1,list.filter(item => item !== list[np]));
    } else {
      result.push({...dictionary});
    }
  }
}

export function solve(puzzle: string): Letters {
  let dictionary:Letters = {};
  puzzle = puzzle.replace(/ /g,'');
  let sides = puzzle.split('==');
  let wordsLeft:string[] = sides[0].split('+');
  let wordsRight:string[] = sides[1].split('+');

  let letters = puzzle.replace(/[^A-Z]/g,'');
  letters.split('').forEach(letter => {dictionary[letter] = 0});
  let result:Letters[] = [];
  generatePermutations(result,dictionary);
  // console.log(Object.keys(result).length);
  let output: Letters[] = [];
  for( let i of result) {
    if( checkPuzzle(i,wordsLeft,wordsRight) ) {
      output.push(i);
    }
  }
  return output[0];
}


// const data='AND + A + STRONG + OFFENSE + AS + A + GOOD == DEFENSE';
// console.log(solve(data));

