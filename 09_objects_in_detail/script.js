// Object is an unordered collection
// of related data
// in form of key and value pairs
const firstName = 'Noman';

const person = {
	// firstName,
	// firstName: firstName,
	firstName: 'Tom',
	lastName: 'Cruise',
	age: 40,
	car: {
		brand: 'Toyota',
		year: 2015,
		color: 'red',
	},
};

console.log(person);

// Accessing adding and updating properties of an object
// DOT NOTATION
const anotherPerson = {
	firstName: 'Brad',
	age: 30,
};

anotherPerson.cat = { name: 'Fluffy', age: 2 };
anotherPerson.age = 25;

console.log(anotherPerson.firstName);
console.log(anotherPerson.cat.name);

// SQUARE BRACKET NOTATION
const property = 'age';

console.log(anotherPerson[property]);
console.log(anotherPerson['firstName']);

// Object methods - built in methods
const cat = {
	name: 'Fluffy',
	age: 3,
	meow: () => {
		console.log('woof woof');
	},
	listAllProperties: function () {
		// this
		console.log(this.name, this.age);
	},
};

console.log(cat.name);
console.log(cat.age);

cat.meow();
cat.listAllProperties();

// Methods
// Object.keys() creates an array containing the keys of an object.

// Initialize an object
const employess = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar',
};

const positions = Object.keys(employess);

console.log(positions);
console.log(employess);

// Object.values() creates an array containing the values of an object.

// Initialize an object
const session = {
	id: 1,
	time: `12-October-2022`,
	device: 'mobile',
	browser: 'Chrome',
};

const sessionInfo = Object.values(session);

console.log(sessionInfo);

// Object.entries() creates a nested array of the key/value pairs of an object.

// Initialize an object
const operatingSystem = {
	name: 'Ubuntu',
	version: '20.02',
	license: 'Open Source',
};

const entries = Object.entries(operatingSystem);

console.log(entries);

// loop through the result
entries.forEach((entry) => {
	let key = entry[0];
	let value = entry[1];

	console.log(`${key}: ${value}`);
});

// Object.freeze() prevents modification
// to properties and values of an object
// and prevents properties form being
// added or removed from an object

// Initialize an object
const user = {
	username: 'Noman',
	password: '123321',
};

const admin = Object.freeze(user);

admin.username = 'Mnoman';
admin.password = '567768';

console.log(admin);

// Object.seal() prevents new properties
// from being added to an object
// but allows the modification of existing properties

const anotherUser = {
	username: 'Noman',
	password: '123321',
};

const newUser = Object.seal(anotherUser);

newUser.password = '8909087';
newUser.active = true;

console.log(newUser);
