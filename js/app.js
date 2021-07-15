'use strict';

// ask a few questions and use if statements (conditional statements) or switch statements to reply with a unique alert;
let score = 0;
// Question 1
let imFromOrig = prompt('Am I from Ohio?');
let imFrom = imFromOrig.toLowerCase();
console.log('Am I from Ohio? User guess: ' + imFrom);
if (imFrom === 'yes' || imFrom === 'y') {
    alert('You\'re right! I\'m from the Heartland. :)');
    score++;
} else {
    alert('Wrong-o. You have 49 more guesses. (Just kidding, I won\'t put you through that.');
}

// Question 2
let petsOrig = prompt('Do I have any pets?');
let pets = petsOrig.toLowerCase();
console.log('Do I have pets? User guess: ' + pets);
if (pets === 'no' || pets === 'n') {
    alert('Correct!');
    score++;
} else {
    alert('As much as I love animals, alas - I do not have any pets.');
}

// Question 3
let favColorOrig = prompt('Is my favorite color pink?');
let favColor = favColorOrig.toLowerCase();
console.log('Is pink my favorite color? User guess: ' + favColor);
if (favColor === 'no' || favColor === 'n') {
    alert('Correct! Pink is not my favorite color.');
    score++;
} else {
    alert('Incorrect - my favorite color is GREEEEEEEN.');
}

// Question 4
let tattooOrig = prompt('Do I have any tattoos?');
let tattoo = tattooOrig.toLowerCase();
console.log('Do I have any tattoos? User guess: ' + tattoo);
if (tattoo === 'yes' || tattoo === 'ny') {
    alert('Correct! I just got my first (but not last) tattoo this year.');
    score++;
} else {
    alert('Incorrect...I just got my very first tattoo this year.');
}

// Question 5
let kiddosOrig = prompt('Do I have any kids?');
let kiddos = kiddosOrig.toLowerCase();
console.log('Do I havey kids? User guess: ' + kiddos);
if (kiddos === 'no' || kiddos === 'n') {
    alert('Incorrect - I have one (amazing) daughter.');
} else {
    alert('Winner winner chicken dinner!');
    score++;
}

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// Question 6
let correctAnswer = 7;
let numberOfGuesses = 4;
for (let i = 0; i < numberOfGuesses; i++) {
    console.log(i);
    let userGuess = prompt('Guess a number between 1 and 10.');
    while (userGuess <= 0 || userGuess > 10) {
        userGuess = prompt('Please enter a number between 1 and 10.');
    }
    if(userGuess == correctAnswer) {
        alert('You got it right!');
        score++;
        break;
    } else if (userGuess > correctAnswer) {
        alert('Too high');
    } else if (userGuess < correctAnswer) {
        alert ('Too low');
    } else {
        alert ('Something went wrong. :(');
    }
}


// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user. Consider using a loop of some sort for this question.

// Question 7

// array of cities I've been
let cityArray = ['calgary', 'sydney', 'beijing', 'glasgow', 'london', 'inverness', 'xi\'an', 'san francisco', 'new york'];
// maximum number of guesses
let cityGuesses = 6;
// flag to indicate the correctg answer
let correctCity = false;

while (!correctCity && cityGuesses > 0) {
    let userCityGuess = prompt('Can you guess a city I\'ve been to? You have ' + cityGuesses + ' attempt(s) left.');
    let userCityGuessLower = userCityGuess.toLowerCase();
    // check if guess matches ANY of the cities
    for (let i = 0; i < cityArray.length; i++) {
        // check if guess matches EACH city
        if (userCityGuessLower === cityArray[i]) {
            alert('Ahh, you know where I\'ve traveled. You know me well. :)')
            correctCity = true;
            score++;
            break;
        }
    }
    if (correctCity) {
        alert('Great job; here is a list of all of the choices: ' + cityArray[0] + ', ' + cityArray[1] + ', ' + cityArray[2] + ', ' + cityArray[3] + ', ' + cityArray[4] + ', ' + cityArray[5] + ', '+ cityArray[6] + ', '+ cityArray[7] + ', '+ cityArray[8]);
    }
    if (!correctCity && cityGuesses <= 5 && cityGuesses > 1) {
        alert('Sorry, you are incorrect. Please guess again.')
    }
    if (!correctCity && cityGuesses === 1) {
        alert('Sorry, you are incorrect. That was your last guess. Here were all of the possible options: ' + cityArray[0] + ', ' + cityArray[1] + ', ' + cityArray[2] + ', ' + cityArray[3] + ', ' + cityArray[4] + ', ' + cityArray[5] + ', '+ cityArray[6] + ', '+ cityArray[7] + ', '+ cityArray[8] + '.');
    }
    cityGuesses--;
    // this is added outside of the nested loop but inside the outer loop in order to decrement one, or else the number will keep looping with the same number of guesses as defined and won't decrement the number at all
}

alert ('Thank you for playing my game! You got ' + score + ' correct!')


