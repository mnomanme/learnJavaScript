// IF Statement
const age = 15;

if (age > 18) {
	// block of code
	console.log('You may enter!');
} else if (age === 18) {
	console.log('You just turned 18, welcome!');
} else {
	console.log('Grow up!');
}

// Truthy and Falsy Values

if ({}) {
	console.log('IN HERE!');
} else {
	console.log('No, IN HERE!');
}

const cats = 5;

if ('cats') {
	console.log(`You have ${cats} cats.`);
} else {
	console.log('You have no cats.');
}

// Falsy Values
// false
// 0
// '' => empty string
// null
// undefined
// NaN => Not A Number

// true
// 1
// "Hello"
// 5
// {}
// []

// Logical Operators

const myAge = 19;
const isCool = true;

// is cool and is above the age of 18

if (isCool && myAge > 18) {
	console.log('You may enter!');
} else {
	console.log('You cannot enter.');
}

console.log(isCool && myAge > 18);

console.log('truthy' && 1 && 'test' && 999);
console.log('truthy' && 0 && 'test' && 999);

console.log('' || 0 || null || undefined);

console.log(!true);
console.log(!!0);

const value = true;

if (!!value) {
	console.log('value is TRUTHY');
} else {
	console.log('value is FALSY');
}

// Switch Statement
const superHero = 'Captain America';

switch (superHero) {
	case 'Iron Man':
		console.log('I am Iron Man...');
		break;
	case 'Thor':
		console.log('That is my hammer!');
		break;
	case 'Captain America':
		console.log('Never give up');
		break;
	case 'Black Widow':
		console.log('One shot, one kill');
		break;
	default:
		console.log('Enter a valid superhero name:');
}

// Ternary Operator
const condition = null;

if (condition) {
	// block of code if true
} else {
	// block of code if false
}

condition ? true : false;

const anotherAge = 18;

if (anotherAge >= 18) {
	console.log('You can drive.');
} else {
	console.log('You can not drive yet.');
}

anotherAge >= 18
	? console.log('You can drive.')
	: console.log('You can not drive yet.');

// Looping While and For Loops
// The "while" loop

let i = 0;

while (i < 10) {
	console.log(i);
	i++;
}

// The "for" loop
// for ([initialization]; [condition]; [final - expression]){}

for (let i = 0; i > 10; i++) {
	console.log(i);
}
