// The "new" keyword

// It creates a new object.
const person = {};
const personOne = new Object();

person.firstName = 'John';
personOne.firstName = 'John';

console.log(person);
console.log(personOne);

const arr = [1, 2, 3];
const arrOne = new Array(1, 2, 3);

console.log(arr, arrOne);

const myDate = new Date('October 18, 2022');

console.log(myDate.getFullYear());

console.log(Array);
console.log(Object);
console.log(Number);
console.log(Date);

const myNumber = new Number(100.121);

console.log(myNumber.toFixed(0));

const arrNew = [1, 2, 3, 4, 5]; // literal

arrNew.push(7);

console.log(arrNew);

// The "this" keyword
function Sentence(words) {
	this.words = words;

	console.log(this);
}

const firstString = new Sentence('Hello, this is a sentence.');

console.log(this);

const newPerson = {
	name: 'John',
	getName() {
		console.log(this);
	},
};

newPerson.getName();

function Car(color, brand, wheels) {
	this.color = color;
	this.brand = brand;
	this.wheels = wheels;

	console.log(this);
}

const blackCar = new Car('black', 'BMW', 4);
const blueCar = new Car('blue', 'Ferrari', 4);

// A Class is a schema for an object that can save many values.

const anotherPerson = {
	name: 'Sultana',
	age: 23,
	isWorking: false,
};

class Person {
	constructor(name, age, isWorking) {
		this.name = name;
		this.age = age;
		this.isWorking = isWorking;
	}
}

const user = new Person('Sultana', 23, false);

console.log(user);

const createPerson = (name, age, isWorking) => {
	const userSchema = { name, age, isWorking };

	return userSchema;
};

const newUser = createPerson('Mehe', 23, true);

console.log(newUser);
