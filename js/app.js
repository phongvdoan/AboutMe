'use strict';
var correct = 0;


var firstName;
while (firstName === undefined || firstName === null || firstName.length <= 0) {
  firstName = prompt('What is your name?');
}
// console.log('Welcome ' + firstName + '! Have a great day!');
alert('Welcome ' + firstName + '! Let\'s see if you can guess things about me');

var kids = prompt('Do you have kids?').toLowerCase();
if (kids === 'yes') {
  // console.log('Have kids: ', kids);
  alert('You are correct! Phong does have kids!');
  correct++;
} else {
  alert('Your input was incorrect!');
}

var instrument = prompt('Do you play a musical instrument?').toUpperCase();
if (instrument === 'YES') {
  // console.log('Plays an instrument: ', instrument);
  alert('You are correct! Phong plays the Piano.');
  correct++;
} else {
  alert('Your input was incorrect!');
}

var maritalStatus = prompt('Are you married?').toLowerCase();
if (maritalStatus === 'yes') {
  // console.log('Is married: ', maritalStatus);
  alert('Correct! Phong is married!');
  correct++;
} else {
  alert('Your input was incorrect!');
}

var drinkBeer = prompt('Do you like beer?').toUpperCase();
if (drinkBeer === 'NO') {
  // console.log('Likes beer: ', drinkBeer);
  alert('It is true, Phong does not like beer!');
  correct++;
} else {
  alert('Your input was incorrect!');
}

var favNum = 2;
var guess;
var counter = 1;

while (counter !== 5) {
  guess = parseInt(prompt('What is Phong\'s favorite Number?'));

  if (guess > favNum) {
    alert('The number you have guessed is TOO HIGH.');
    counter++;
  } else if (guess < favNum) {
    alert('The number you have guessed is TOO LOW.');
    counter++;
    // eslint-disable-next-line use-isnan
  } else if (guess === NaN || guess === null) {
    alert('That is not a number. Input a number.');
    counter++;
  } else {
    alert('CONGRATS! You have guess Phong\'s favorite number with in ' + counter + ' tries!');
    correct++;
    break;
  }
}

alert('The correct answer was ' + favNum);


var food = ['salad', 'porkchops', 'chocolate', 'buffalo wings', 'tacos', 'sushi'];
var foodGuess;

for (var i = 0; i < 6 && foodGuess !== food[5]; i++) {
  foodGuess = prompt('What is Phong\'s favorite food? Pick from the following ' + food).toLowerCase();

  if (foodGuess === food[5]) {
    alert('Great job! Sushi is Phong\'s favorite food!');
    correct++;
    break;
  } else {
    alert('No, ' + foodGuess + ' is not Phong\'s favorite food.');
  }
}
alert('You scored ' + correct + 'out of 7!');

