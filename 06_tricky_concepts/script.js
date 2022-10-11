// Global Scope
const myName = 'Noman';

const logName = () => {
	console.log(myName);
};

logName();

// Local Scope / Function Scope
const someFunction = () => {
	// local scope One
	const name = 'Mehe';
	console.log(name);

	const anotherFunction = () => {
		// local scope Two
		console.log(name);
	};
	anotherFunction();
};

const anotherFunction = () => {
	const name = 'Sultana';
	console.log(name);
};

// console.log(name);

someFunction();
anotherFunction();

// Block Scope
if (true) {
	var names = 'Mehes';
	const name = 'Mehe';
	console.log(name);
}

// console.log(names);

// Hoisting in JavaScript
console.log(typeof age);
console.log(age);

var age = 26;

var hoist;

console.log(hoist);

hoist = 'The value is hoisted';

hoisted();

function hoisted() {
	console.log(message);
	var message = 'test';
}

console.log(helloAge);

const helloAge = 26;

newHoist();

const newHoist = () => {
	var message = 'test';

	console.log(message);
};

// Closuers in JavaScript

const outer = () => {
	const outerVar = 'Hello';

	const inner = () => {
		const innerVar = 'Hi';

		console.log(outerVar, innerVar);
	};

	console.log(outerVar);

	return inner;
};

// console.log(outerVar);

// outer();
const innerFn = outer();

innerFn();

const init = () => {
	const hobby = 'Learning JavaScript'; // local variable created by init func

	const displayHobby = () => {
		// displayHobby is the inner function, a closure
		console.log(hobby); // using a variable created in the parent function
	};

	displayHobby();
};

init();
