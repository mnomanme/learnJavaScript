// Selecting Elements
const el = document.getElementById('element-below-input');

console.log(el);

const h2 = document.getElementsByTagName('h2');

console.log(h2);

const test = document.getElementsByClassName('test');

console.log(test);

const all = document.querySelectorAll('h2.test');

console.log(all);

const h1 = document.querySelector('#heading');

console.log(h1);

// Element Properties and Methods
const element = document.querySelector('#heading');

console.log(element.classList);
console.log(element.className);
console.log(element.id);
console.log(element.innerHTML);

const button = document.querySelector('button');

console.log(button);

button.addEventListener('click', () => {
	alert('you clicked on the button');
});

console.log(button.getBoundingClientRect());

console.log(button.hasAttribute('type'));

console.log(button.removeAttribute('type'));

console.log(button.hasAttribute('type'));

// Working with Classes
const menuClicked = (currEl) => {
	const menuItems = document.getElementsByClassName('menu-item');

	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.remove('active');
	}
	// event.target.classList.add('active');
	currEl.classList.add('active');
};

// Creating Traversing and Removing Nodes
const heading = document.createElement('h1');

const body = document.querySelector('body');

body.appendChild(heading);
heading.innerText = 'Hello World!';

console.log(body);
console.log(heading);

const subjects = document.querySelector('.subjects');

console.log(subjects);

console.log(subjects.firstElementChild);
console.log(subjects.lastElementChild);

const favSubject = document.querySelector('.fav-subject');

console.log(favSubject);

console.log(favSubject.previousElementSibling);

console.log(favSubject.nextElementSibling);

console.log(favSubject.parentElement);

console.log(favSubject.childNodes);
console.log(favSubject.firstChild);
console.log(favSubject.lastChild);
console.log(favSubject.previousSibling);
console.log(favSubject.nextSibling);
console.log(favSubject.parentNode);

favSubject.remove();
