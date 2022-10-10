// Functions
// A BLOCK OF CODE => PERFORMS A TASK

// A FUNCTION DECLARATION (defining a function)
function square(number) {
	console.log('I am here!');
	return number * number;
}

// A FUNCTION CALL (calling/executing/invoking a function)

// console.log(square(2));
const result = square(2);
console.log(result);

// Declaring and Invoking Functions

// A function delcaration
function delcaration(params) {
	// statements
	// have access to "this" keyword
}

// A function expression
const expression = function name(params) {
	// statements
};

// An arrow function
const arrow = (params) => {
	// statements
};

function sayHi(name) {
	console.log(`Hi, ${name}`);
}

sayHi('Muhammad Noman');

// Function Return
// Returns undefined

function add(a, b) {
	// return 'RETURNED';
	return a + b;
}

const sum = add(12, 12);

console.log(sum);

function test() {
	console.log(1);
	return true;
	console.log(2);
	return false;
	console.log(3);
}

const bool = test();

console.log(bool);

// Arrow Functions

const arrowSquare = (number) => {
	return number ** 3;
};
const arrowSquareTwo = (number) => number ** 5;

const arrowResult = arrowSquare(5);
const arrowResultTwo = arrowSquareTwo(5);

console.log(arrowResult);
console.log(arrowResultTwo);

// Parameters vs Arguments
// Parameters - used when defining a function
// Arguments - passed when making a function call

const sayHello = (firstName = 'Noman', age = 0) => {
	console.log(`Hello, ${firstName} is ${age} years old`);
};

sayHello();

const addNumber = (a, b = 0) => {
	return a + b;
};

const addResult = addNumber(2, 3);

console.log(addResult);
