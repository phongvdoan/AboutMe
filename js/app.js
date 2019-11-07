'use strict';

var kids = prompt('Do you have kids?').toLowerCase();
if (kids === 'yes') {
  // console.log('Have kids: ', kids);
  alert('You are correct! Phong does have kids!');
} else {
  alert('Your input was incorrect!');
}

var instrument = prompt('Do you play a musical instrument?').toUpperCase();
if (instrument === 'YES') {
  // console.log('Plays an instrument: ', instrument);
  alert('You are correct! Phong plays the Piano.');
} else {
  alert('Your input was incorrect!');
}

var maritalStatus = prompt('Are you married?').toLowerCase();
if (maritalStatus === 'yes') {
  // console.log('Is married: ', maritalStatus);
  alert('Correct! Phong is married!');
} else {
  alert('Your input was incorrect!');
}

var drinkBeer = prompt('Do you like beer?').toUpperCase();
if ( drinkBeer === 'NO') {
  // console.log('Likes beer: ', drinkBeer);
  alert('It is true, Phong does not like beer!');
} else {
  alert('Your input was incorrect!');
}

var firstName;
while (firstName === undefined || firstName === null || firstName.length <= 0) {
  firstName = prompt('What is your name?');
}
console.log('Welcome ' + firstName + '! Have a great day!');
alert('Welcome ' + firstName + '! Have a great day!');
