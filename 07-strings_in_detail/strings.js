// Guests
const guestList = 'Our guests are: emma, jacob, isabella, ethan';

// 1. Get a lenght of the string. Store in a variable called length.

const length = guestList.length;

console.log(length);

// 2. Uppercase the entire string.
// Store the result in a variable called uppercasedGuestList

const uppercasedGuestList = guestList.toUpperCase();

console.log(uppercasedGuestList);

// 3. Check whether 'ETHAN' is on the uppercasedGuestList.
// Store the answer in a variable called isEthanOnTheList.
// The data type of the variable must be a boolean.

const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');

console.log(isEthanOnTheList);

// 4. Create a substring that only contains the following:
// 'EMMA, JACOB, ISABELLA, ETHAN'.
// Store the answer in a variable called substringGuests.

const substringGuests = uppercasedGuestList.slice(16);

console.log(substringGuests);

// 5. Out of the substring you just created,
// create an array of names of people that are on the list.
// Store that array in a variable called guests.

const guests = substringGuests.split(',');

console.log(guests);
