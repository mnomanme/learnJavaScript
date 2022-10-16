// Asynchronous code

// SetInterval
setInterval(() => {
	console.log('Hello, World!');
}, 1000);

// clearInterval
const myInterval = setInterval(() => console.log('Hello, World!'), 1000);

clearInterval(myInterval);

// setTimeout
setTimeout(() => {
	console.log('Hello, World!');
}, 2000);

console.log('Hello, World a the bottom');

// clearTimeout
const myTimeout = setTimeout(() => console.log('Hello, World!'), 1000);

clearTimeout(myTimeout);

// What is synchronous JavaScript?

// Synchronous JavaScript is one in which the code
// is executed line by line and their tasks are
// completed instantly, i.e. there is no time
// delay in the completion of the tasks for
// those lines of coe.

// Synchronous JS Example

const functionOne = () => {
	console.log('Function One');

	functionTwo();

	console.log('Function One, Part Two');
};

const functionTwo = () => {
	console.log('Function Two');
};

functionOne();

// Asynchronous JS Example
const functionAsyncOne = () => {
	console.log('Function One');

	functionAsyncTwo();

	console.log('Function One, Part Two');
};

const functionAsyncTwo = () => {
	setTimeout(() => console.log('Function Two'), 2000);
};

functionAsyncOne();

// Asynchronous JavaScript is one in which
// some lines of code take time to run.
// These tasks are run in the backgroun
// while the JavScript engine keeps
// executing other lines of code.
// when the result of the asynchronous
// tasks gets unavailable,
// is then used in the program.

// Callbacks
// Data Fetching

// API

const fetchUser = (username, callback) => {
	console.log('Fetching....');

	setTimeout(() => {
		console.log('Now we have the user.');

		callback({ username });
	}, 2000);
};

// Callback hell

const fetchUserPhotos = (username, callback) => {
	setTimeout(() => {
		console.log(`[Now we have the photos for ${username}]`);

		callback(['Photo 1', 'Photo 2']);
	}, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
	setTimeout(() => {
		console.log(`[Now we have the photo details for the photo ${photo}]`);

		callback('Detils......');
	}, 2000);
};

fetchUser('Noman', (user) => {
	console.log(`Your name is: ${user.username}`);

	fetchUserPhotos(user.username, (userPhotos) => {
		console.log(`Your photos are: ${userPhotos}`);

		fetchPhotoDetails(userPhotos[0], (details) => {
			console.log(`Your photo details are: ${details}`);
		});
	});
});

// Promises
// They are objects that either return
// the successfully fethced data, or the error.
const fetchPromiseUser = new Promise((resolve, reject) => {
	console.log('Fetching....');

	setTimeout(() => {
		// console.log('Now we have the user.');

		resolve({ username: 'Noman' });

		reject('User NOT Found');
	}, 2000);
});

fetchPromiseUser
	.then((user) => console.log(user.username))
	.catch((error) => console.log(error));

const fetchUserPromise = (username) => {
	return new Promise((resolove, reject) => {
		console.log('Fetching....');

		setTimeout(() => {
			console.log('Now we have the user.');

			resolove({ username });
			reject('User NOT Found');
		}, 2000);
	});
};

const fetchUserPhotosPromise = (username) => {
	return new Promise((resolove, reject) => {
		setTimeout(() => {
			console.log(`[Now we have the photos for ${username}]`);

			resolove(['Photo 1', 'Photo 2']);
			reject('User NOT Found');
		}, 2000);
	});
};

const fetchPhotoDetailsPromise = (photo) => {
	return new Promise((resolove, reject) => {
		setTimeout(() => {
			console.log(`[Now we have the photo details for the photo ${photo}]`);

			resolove('Details......');
			reject('User NOT Found');
		}, 2000);
	});
};

fetchUserPromise('Noman')
	.then((user) => fetchUserPhotosPromise(user.username))
	.then((photos) => fetchPhotoDetailsPromise(photos[0]))
	.then((details) => console.log(`You photo details are: ${details}`));

// async await
// ASYNC FUNCTIONS RETURN PROMISES!!!
const fetchNumebr = async () => {
	return 100;
};

console.log(fetchNumebr());

fetchNumebr().then((number) => console.log(number));

const consoleFetchedNumber = async () => {
	const number = await fetchNumebr();
	console.log(number);
};

consoleFetchedNumber();

const displayData = async () => {
	const user = await fetchUserPromise('Noman');
	const photos = await fetchUserPhotosPromise(user.username);
	const details = await fetchPhotoDetailsPromise(photos[0]);

	console.log(details);
};

displayData();
