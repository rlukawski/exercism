export function isValid(isbn: string): boolean {

  let sum = 0;
  let mult = 10;
  isbn = isbn.replace(/[^0-9^A-Z]/g,'');
  if( isbn.length !== 10) {
    return false;
  }
  for(let letter of isbn) {
    
    if( letter.match(/[0-9]/)) {
      sum += Number(letter) * mult;
    } else if( letter === 'X' && mult === 1) {
      sum += 10 * mult;
    } else {
      return false;
    }
    mult--;
  }
  return !(sum % 11);
}
