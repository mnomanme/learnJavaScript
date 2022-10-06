// Variables Naming
var variableName = 'Welcome to variables';

console.log(variableName);

let variableNameLet = 'Welcome to variables let';

console.log(variableNameLet);

const variableNameConst = 'Welcome to variables const';

console.log(variableNameConst);

// Data Types
// Strings === "Hello everyone"
// Numbers === 5, 6, 7
// Boolean === true or false
// Null === null
// Undefined === undefined
// Object === most important & building block modern JS
// Symbol == extremly or rarely

// Comments
// Single Line Comment
/*
This 
is 
a 
multi
line 
comment
*/

// Creating a variable using var keyword
// var variableNameComment = 'test';

// Creating a variable using let keyword
// let variableNameComment = 'test';

// Creating a variable using const keyword
const variableNameComment = 'test';

console.log(variableNameComment);

// VARIABLE NAMING
// 1. The name should be unique
// 2. The name should not be any reserved keyword
// 3. The name must start with a character, _, $.

// Strings
const exampleString = 'Hello, World!';

console.log(exampleString);

const singleQuotes = 'Hello!';
const doubleQuotes = "Hello! I'm Noman.";
const backticks = `Hello`;
const backticksNumber = `2 + 2`;
const backticksNumberAdd = `${2 + 2}`;

const name = 'Mehe';
const backticksName = `Hello, ${name}`;

console.log(backticksNumber);
console.log(backticksNumberAdd);
console.log(typeof backticks);

// Numbers
const wholeNumber = 5;
const decimalNumber = 0.44;

console.log(wholeNumber);
console.log(decimalNumber);

const string = 'Hello';

const firstNumber = 10;
const secondNumber = 5;

const result = string * secondNumber;

console.log(typeof result);

// Booleans
// true = correct, yes, 1
// false = incorrect, no, 0

const isCool = true;

if (isCool) {
	console.log("Hi man, you're cool");
} else {
	console.log('Oh, hi...');
}

const age = 20;

console.log(age > 20);

// Null
let nullAge = null;

// nullAge = 20;

console.log(nullAge);
console.log(typeof nullAge);

// Undefined
let x;

// let y = undefined;

console.log(typeof x);
console.log(typeof undefined);

// Objects
const nameObject = 'Abdullah';
const ageObject = 26;

const person = {
	name: 'Mehe',
	age: 22,
};

// Dot notation
console.log(person);
console.log(typeof person);
console.log(person.age);
console.log(typeof person.age);

// Array
const arr = [1, 2, 3, 4];

console.log(arr);
console.log(typeof arr);

const date = new Date();

console.log(date);
console.log(typeof date);

// Statically typed
// int number = 4;
// number = 'number'

// Dynamically typed
// JavaScript Dynamically typed
let message = 'Hello, World!';

console.log(typeof message);

message = 5;

console.log(typeof message);
