// Array In Details
const months = ['January', 'February', 'March', 'April'];

console.log(months);
console.log(typeof months);
console.log(months[0]);

months[4] = 'May';

console.log(months.length);

// const items = ['Apple', { name: 'Noman' }, true, () => {}];

for (let i = 0; i < months.length; i++) {
	console.log(months[i]);
}

// Array Methods
const names = ['Jon', 'Bob', 'David', 'Mark'];

// Array Push - Adds a new value to the end of the array.
console.log(names.push('Noman')); // 5

const length = names.push('Baki');

console.log(length);

names.push('Nayeem');

console.log(names);

// Array Pop - Deletes the last element of an array
names.pop();

console.log(names);

const removedValue = names.pop();

console.log(removedValue);

// Array Shift - Deletes the first element of an array
names.shift();

console.log(names);

// Array Unshift - Adds a new value to the start of an array
names.unshift('Abdullah');

console.log(names);

// Array Splice - It adds /removes new values from any position of an array
names.splice(2, 0, 'Mehe', 'Sultana');

names.splice(2, 2);

console.log(names);

// Array Slice - Copies certain parts of an array into a newely created an array
const noOneLikesJon = names.slice(1, 3);

console.log(noOneLikesJon);

// Array forEach
const friends = ['Naim', 'Shabi', 'Sezan'];

for (let i = 0; i < friends.length; i++) {
	console.log(i, friends[i]);
}

friends.forEach((friend, i) => {
	console.log(friend, i);
});

const logTheName = (friend, i) => console.log(friend, i);

friends.forEach(logTheName);

// Use When
// you want to do something with each element of the array

// Don't use when
// you want to stop or break the loop when some condition is true
// you're working with async code

let sum = 0;
const numbers = [2, 43, 65, 21, 14];

numbers.forEach((number, i) => {
	sum += number;
	console.log(i, sum);
});

console.log(sum);

// Array Map
const inventory = [
	{ price: 5, name: 'eggs' },
	{ price: 4, name: 'ham' },
	{ price: 3, name: 'mayo' },
	{ price: 5, name: 'bread' },
];

const prices = inventory.map((item) => item.price);
const items = inventory.map((item) => item.name);

console.log(prices);
console.log(items);

// Array Filter
const filterNumbers = [-10, 0, -2, 15, -36, 25];

const positiveNumbers = filterNumbers.filter((number) => {
	return number >= 0;
});

console.log(positiveNumbers);

const positiveNumbersOne = [];

for (let i = 0; i < numbers.length; i++) {
	numbers[i] >= 0 ? positiveNumbersOne.push(numbers[i]) : false;
}

console.log(positiveNumbersOne);

const employeesData = [
	{ name: 'Sebastian', overtime: 5 },
	{ name: 'Cardi Vee', overtime: 10 },
	{ name: 'George Lopez', overtime: 12 },
];

const employeesToReward = employeesData.filter(
	(employee) => employee.overtime >= 7
);

console.log(employeesToReward);

const employeeNames = employeesToReward.map((employee) => employee.name);

console.log(employeeNames);

employeeNames.forEach((name) => console.log(`${name} received a reward`));

// Array Find

// The Find method for arrays returns the
// first value that satisfies the condition

const findNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberFind = findNumbers.find((number) => number > 5);

console.log(numberFind);

const states = ['Alaska', 'California', 'Colorado', 'Hawaii'];

const findState = states.find((state) => state.startsWith('C'));

console.log(findState);

// Array includes
const arrayOne = [1, 2, 3];

console.log(arrayOne.includes(6));

const pets = ['cat', 'dog', 'llama'];

console.log(pets.includes('cat'));

const bookshelf = ['Moby Dick', 'The Great, Gatsby', 'Pride and Prejudice'];

bookshelf.includes('moby dick')
	? console.log('We have that book, here you go.')
	: console.log('Cannot find the book, sorry!');

// Array Sort
// => alphabetically
// => sorts numbers in ascending order
const sortNames = ['Anne', 'Carl', 'Bob', 'Dean'];

sortNames.sort();

console.log(sortNames);

const sortNumbers = [6, 3, 1, 7, 9, 2, 15, 25, 99, 44];

// Ascending Order
sortNumbers.sort((a, b) => a - b);

// Descending Order
sortNumbers.sort((a, b) => b - a);

console.log(sortNumbers);

// Array Some and Array Every
const array = [1, 2, 3, 4, 5];

const isGreaterThan3 = (number) => number > 3;

console.log(array.some(isGreaterThan3));

// Array Some => returns true if at least one element passes the test
console.log(array.some((el) => el > 3)); // true

// Array Every => returs true only if all elements pass the test
console.log(array.every((el) => el > 0)); // true

// Array Reduce
const groceryList = [29, 12, 46, 54, 110, 87];

let total = 0;

groceryList.forEach((price) => {
	total += price;
});

console.log(total);

// reduce method
const totalPrice = groceryList.reduce((total, price) => {
	return total + price;
}, 0);

console.log(totalPrice);

const reduceNumbers = [1, 2, 3, 4, 5];

const sumTotal = reduceNumbers.reduce((acc, val) => acc + val, 0);

console.log(sumTotal);

// acc = 0, val = 1 => 0 + 1 === 1 <== acc
// acc = 1, val = 2 => 1 + 2 === 3 <== acc
// acc = 3, val = 3 => 3 + 3 === 6 <== acc
// acc = 6, val = 4 => 4 + 6 === 10 <== acc
// acc = 10, val = 5 => 10 + 5 === 15
