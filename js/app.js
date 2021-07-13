'use strict';

// ask a few questions and use if statements (conditional statements) or switch statements to reply with a unique alert;

// ask a question
let imFromOrig = prompt('Am I from Ohio?');
let imFrom = imFromOrig.toLowerCase();
console.log(imFrom);
if (imFrom === 'yes' || imFrom === 'y') {
    alert('You\'re right! I\'m from the Heartland. :)');
} else {
    alert('Wrong-o. You have 49 more guesses. (Just kidding, I won\'t put you through that.');
}

// break

let petsOrig = prompt('Do I have any pets?');
let pets = petsOrig.toLowerCase();
console.log(pets);
if (pets === 'no' || pets === 'n') {
    alert('Correct!');
} else {
    alert('As much as I love animals, alas - I do not have any pets.');
}

// break

let favColorOrig = prompt('Is my favorite color pink?');
let favColor = favColorOrig.toLowerCase();
console.log(favColor);
if (favColor === 'no' || favColor === 'n') {
    alert('Correct! Pink is not my favorite color.');
} else {
    alert('Incorrect - my favorite color is GREEEEEEEN.');
}

// break

let tattooOrig = prompt('Do I have any tattoos?');
let tattoo = tattooOrig.toLowerCase();
console.log(tattoo);
if (tattoo === 'yes' || tattoo === 'ny') {
    alert('Correct! I just got my first (but not last) tattoo this year.');
} else {
    alert('Incorrect...I just got my very first tattoo this year.');
}

// break

let kiddosOrig = prompt('Do I have any kids?');
let kiddos = kiddosOrig.toLowerCase();
console.log(kiddos);
if (kiddos === 'no' || pets === 'n') {
    alert('Incorrect - I have one (amazing) daughter.');
} else {
    alert('Winner winner chicken dinner!');
}
