// Value VS Reference
// JavaScript differentiates Data Types on:

// - Primitive values (Number, String, Boolean...)
// - Complex values (Objects, Arrays)

let x = 1; // 2
let y = x; // 1

x = 2;

console.log(x, y);

let firstPerson = 'Mark';
let secondPerson = firstPerson;

firstPerson = 'Austin';

console.log(firstPerson);
console.log(secondPerson);

const animals = ['dogs', 'cats'];
const otherAnimals = animals;

animals.push('llamas');

console.log(animals);
console.log(otherAnimals);

const person = { firstName: 'Jon', lastName: 'Snow' };

const otherPerson = person;

// PERSON AND OTHER PERSON POINT TO THE SAME LOCATION IN THE MEMORY

person.firstName = 'Johnny';

console.log(person);
console.log(otherPerson);

const anotherPerson = { name: 'Noman' }; // 123asd
const anotherNewPerson = anotherPerson; // 123asd
const newPerson = { name: 'Noman' }; // 321dsa

console.log(anotherPerson === anotherNewPerson);
console.log(anotherPerson === newPerson);

// Shallow Cloning
// Cloning Arrays
// 1st way: Spread Operator
// 2nd way: Array.slice()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const copiedNumbers = numbers;
const newNumbers = [...numbers];
const shallownumbers = numbers.slice();

numbers.push(9);

// console.log(...numbers);
// console.log(newNumbers);
// console.log(numbers === copiedNumbers); // true
// console.log(numbers === newNumbers); // false

console.log(numbers);
console.log(copiedNumbers);
console.log(newNumbers);

// Cloning Objects
// 1st way: Spread Operator
// 2nd way: Object.assign()

const clonePerson = { name: 'John', age: 20 };
const newOtherPerson = { ...clonePerson };
const assignPerson = Object.assign({}, clonePerson);

person.age = 22;

console.log(clonePerson);
console.log(newOtherPerson);
console.log(assignPerson);

// Deep Cloning
const deepPerson = {
	firstName: 'Emma',
	car: {
		brand: 'BMW',
		color: 'blue',
		wheels: 4,
	},
};

const newDeepPerson = { ...deepPerson, car: { ...deepPerson.car } };

newDeepPerson.firstName = 'Mia';
newDeepPerson.car.color = 'violet';

console.log(deepPerson);
console.log(newDeepPerson);

// another
const stringifiedPerson = JSON.stringify(deepPerson);
const newStringifiedPerson = JSON.parse(stringifiedPerson);
const anotherStringifiedPerson = JSON.parse(JSON.stringify(deepPerson));

console.log(stringifiedPerson);
console.log(newStringifiedPerson);
console.log(anotherStringifiedPerson);

anotherStringifiedPerson.firstName = 'Noman';
anotherStringifiedPerson.car.color = 'black';

console.log(deepPerson);
console.log(anotherStringifiedPerson);
