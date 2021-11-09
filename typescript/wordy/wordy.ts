export const answer = (question: string): number => {
  let sum: number = 0;
  let waitFor = 'question';
  let operand;

  while( question ) {
    let q;
    if( q = question.match(/What is(.*)/) ) {
      if( waitFor !== "question") {
        throw new Error("Syntax error")
      } else {
        question = q[1];
        waitFor = "number"
        operand = "plus"        
      }
    } else if( q = question.match(/^\s*([-\d]+)(.*)$/) ){   
      
      if( waitFor !== "number") {
        throw new Error("Syntax error");
      } else {
        question = q[2];
        switch( operand ) {
          case 'plus':
            sum = sum + Number(q[1]);
            break;
          case 'minus':
            sum = sum - Number(q[1]);
            break;
          case 'multiplied by':
            sum = sum * Number(q[1]);
            break;
          case 'divided by':
            sum = sum / Number(q[1]);
            break
        }
        waitFor="operand";        
      }
    } else if ( q = question.match(/^\s*(plus|minus|divided by|multiplied by)(.*)$/)) {
      if( waitFor !== "operand") {
        throw new Error("Syntax error");
      } else {
        question = q[2];
        operand = q[1].trim();
        waitFor="number";
      }
    } else {
      throw new Error("Unknown operation");
    }

    if( question.match(/^\s*\?$/)) {
      if( waitFor === "operand") {
        question = "";
      } else {
        throw new Error("Syntax error")
      }
    }
  }
  return sum;  
}
