// Arithmetic Operators
const a = 13;
const b = 12;
let result = 0;

// Addition
result = a + b;

// Subtraction
result = a - b;

// Multiplication
result = a * b;

// Division
result = a / b;

// Exponent
result = b ** a;

// Modulo
// 13 / 12 === 1 (1)
// 1 / 12 === 0 (1)
result = a % b;

// When you divide 13 by 12
// The remainder is 1

// Incremet Decrement
result++;
result--;

console.log(result);

// Comparison Operators and Equality
// Comparison Operators ==> true/false

const x = '20';
const y = 20;

// Greater than
console.log(x > y);

// Greater than or equal to
console.log(x >= y);

// Less than
console.log(x < y);

// Less than or equal
console.log(x <= y);

// Is equal
console.log(x == y);

// Not equal
console.log(x != y);

// Strict Equality
console.log(x === y);

// Strict Inequality
console.log(x !== y);

// Strict vs Loose Equality
console.log(5 === '5');
console.log('Hello' === 'Hello');

// Strict Equality
// Compares VALUES and DATA TYPES
// return true only if both are the same

// Loose Equality
// Doesn't compare DATA TYPES
console.log(200 == '200');

// The Good Ones: === !==
// The Evil Twins: == !=

console.log('' == '0'); // false
console.log(0 == ''); // true
console.log(0 == '0'); // true

console.log(false == 'false'); // false
console.log(false == '0'); // true

console.log(true == 1); // true
console.log(true === 1); // false

// Logical Operators
// AND && => ALL OPERANDS ARE TRUE => TRUE
console.log(true && true);
console.log(true && false && true);

// OR || => AT LEAST ONE OPERAND IS TRUE => TRUE
console.log(true || false);

// NOT ! =>
console.log(!true);
console.log(!false);

// Assignment Operators
let number = 5;

number += 5; // number = number + 5
number -= 5; // number = number - 5
number *= 5; // number = number * 5
number /= 5; // number = number / 5

console.log(number);

let string = 'Hello';

string += ', I am Noman';

console.log(string);
