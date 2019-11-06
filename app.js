'use strict';

var kids = prompt('Do you have kids?');
if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'no') {
  // console.log('Have kids: ', kids);
  alert('Have kids: ' + kids);
} else {
  alert('Your input was incorrect!');
}

var instrument = prompt('Do you play a musical instrument?');
if (instrument.toUpperCase() === 'YES' || instrument.toUpperCase() === 'NO') {
  // console.log('Plays an instrument: ', instrument);
  alert('Plays an instrument: ' + instrument);
} else {
  alert('Your input was incorrect!');
}

var maritalStatus = prompt('Are you married?');
if (maritalStatus.toLowerCase() === 'yes' || maritalStatus.toLowerCase() === 'no') {
  // console.log('Is married: ', maritalStatus);
  alert('Is married: ' + maritalStatus);
} else {
  alert('Your input was incorrect!');
}

var drinkBeer = prompt('Do you like beer?');
if (drinkBeer.toUpperCase() === 'YES' || drinkBeer.toUpperCase() === 'NO') {
  // console.log('Likes beer: ', drinkBeer);
  alert('Likes beer: ' + drinkBeer);
} else {
  alert('Your input was incorrect!');
}

var firstName;
while (firstName === undefined || firstName === null || firstName.length <= 0) {
  firstName = prompt('What is your name?');
}
console.log('Welcome ' + firstName + '! Have a great day!');
alert('Welcome ' + firstName + '! Have a great day!');
