import { cats, numberOfCats } from './cats.js';
import Test from './test.js';

// ECMAScript 6 or simply ES6

// const and let
// Arrow Function
// Default Parameters
// Template Strings

// IMPORTS AND EXPORTS

console.log(`I have ${numberOfCats} cats`); // browser runs only
console.log(`My cats are: ${cats}`); // browser runs only

console.log(Test);

// Spread and Rest Operator (...)

const add = (...args) => {
	console.log(args);

	return args.reduce((acc, value) => acc + value, 0);
};

console.log(add(2, 2, 2, 2, 2, 2));

const numbers = [1, 2, 3, 4, 5, 6];

numbers.push(7);

const newNumbers = [...numbers, 8];

console.log(...numbers);
console.log(newNumbers);

const object = { name: 'Mehe', age: 21 };
const objectOne = { ...object, name: 'Noman' };

object.name = 'Noman';

console.log(object);
console.log(objectOne);

// Object Destructuring
const person = {
	firstName: 'Mehe',
	lastName: 'Sultana',
	car: {
		color: 'blue',
		wheels: 4,
	},
	animals: {
		cat: {
			name: 'Kitty',
			age: 3,
		},
		dog: {
			name: 'Fluffy',
			age: 3,
		},
	},
};

console.log(person.firstName);
console.log(person.animals.cat.name);

const {
	firstName,
	lastName,
	car: { color, wheels },
	animals: { cat, dog },
} = person;

console.log(firstName);
console.log(lastName);
console.log(color);
console.log(wheels);
console.log(cat.name);
console.log(dog.name);

// Node
const test = (req, res) => {
	const { body, params } = req;
};

// React
const Component = (props) => {
	const { keys } = props;
};

// Array Destructuring
const introduction = ['Hello', 'I', 'am', 'Noman'];

const greetings = introduction[0];
const name = introduction[3];

console.log(greetings, name);

const [greeting, , , myname] = introduction;

console.log(greeting, myname);
