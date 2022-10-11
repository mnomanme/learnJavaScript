// Strings
const single = '${2+2}';
const double = "$'{2+2}'";

const backticks = `${2 + 2}`;

console.log(single, double, backticks);

const sum = (a, b) => a + b;

const total = `The sum is ${sum(2, 2)}`;

console.log(total);

// String length and basic properties
const myName = 'Noman';

console.log(myName.length);
console.log(myName[2]);

const firstletter = myName[0];
// const lastLetter = myName[4];
const lastLetter = myName[myName.length - 1];

console.log(firstletter, lastLetter);

// Change String Case
// UPPERCASE and LOWERCASE letters

const mixedCaseString = 'Hello! How are you?';

// mixedCaseString.length; // property == dot notation
// mixedCaseString.toLowerCase(); // method == constructor

const lowerCaseString = mixedCaseString.toLowerCase();
const upperCaseString = mixedCaseString.toLocaleUpperCase();

console.log(lowerCaseString);
console.log(upperCaseString);

// Searching for a substring
const hobbies = 'I love HTML, CSS and JavaScript, JavaScript.';

// indexOf()
const firstIndex = hobbies.indexOf('JavaScript');

console.log(firstIndex);

// lastIndexOf()
const lastIndex = hobbies.lastIndexOf('JavaScript');

console.log(lastIndex);

// includes
const includesJavaScript = hobbies.includes('JavaScript');

console.log(includesJavaScript);

// startsWith()
console.log(hobbies.startsWith('I love'));

// endsWith()
console.log(hobbies.endsWith('JavaScript.'));

// Getting a substring
const exampleString = 'hotdog';

// slice()
const hot = exampleString.slice(0, 3);

console.log(hot);

// Split a string
const exampleSplitString = 'cats';
const multipleString = 'The quick brown fox jumps over the lazy cat.';

// split()
const letters = exampleSplitString.split('');

const multipleLetters = multipleString.split(' ');

console.log(multipleLetters);

// Reverse repeat and trim a string
// reverse string
const reverseExample = 'test'; // tset

const reversedString = reverseExample.split('').reverse().join('');

console.log(reversedString);

// repeat()
const catSays = 'woof';

console.log(catSays.repeat(5));

// trim()
const email = '   contact@noman.com   ';

console.log(email.trim());
