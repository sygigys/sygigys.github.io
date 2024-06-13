var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

var iceCream = 'Bobr';
if (iceCream === 'Bob') {
	alert('Yay, Let me eat some Bob!');
}	else {
	alert ('Nah, let me take some shit, bruh');
}

function multiply(num1, num2) {
	var result = num1 * num2;
	return result;
}

/*
document.querySelector('html').onclick =function(){
	alert('Ouch! Stop poking me!');
};
*/

var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === 'folder/object.png') {
		myImage.setAttribute('src', 'folder/obyect.png');
	} else {
		myImage.setAttribute('src', 'folder/object.png');
	}
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Pls vstav SVOyo imya');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'l+fm, ' + myName;
};

if (!localStorage.getItem('name')) {
	setUserName();
}	else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'l+fm, ' + storedName;
};

myButton.onclick = function() {
	setUserName();
};