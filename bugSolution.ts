function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

function addOrSubtract(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else if (typeof a === 'string' && typeof b === 'string') {
    return parseInt(a) + parseInt(b);
  } else {
    throw new Error('Invalid input type');
  }
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5
let result3 = addOrSubtract( "5", "3");
console.log(result1); // 8
console.log(result2); // 5
console.log(result3); //8