// 'use strict';

// // ask a few questions and use if statements (conditional statements) or switch statements to reply with a unique alert;
// let score = 0;

// yesNoQuestion(prompt('Am I from Ohio?'), 'You\'re right! I\'m from the Heartland. :)', 'Wrong-o. You have 49 more guesses. (Just kidding, I won\'t put you through that.', 'yes', 'y');
// yesNoQuestion(prompt('Do I have any pets?'), 'Correct!', 'As much as I love animals, alas - I do not have any pets.', 'no', 'n');
// yesNoQuestion(prompt('Is my favorite color pink?'), 'Correct! Pink is not my favorite color.', 'Incorrect - my favorite color is GREEEEEEEN.', 'no', 'n');
// yesNoQuestion(prompt('Do I have any tattoos?'), 'Correct! I just got my first (but not last) tattoo this year.', 'Incorrect...I just got my very first tattoo this year.', 'yes', 'y');
// yesNoQuestion(prompt('Do I have any kids?'), 'Winner winner chicken dinner!', 'Incorrect - I have one (amazing) daughter.', 'yes', 'y');

// function yesNoQuestion(prompt, correctResponse, incorrectResponse, correctAnswer1, correctAnswer2){
//     let promptLowerCase = prompt.toLowerCase();
//     console.log(prompt + ' ' + promptLowerCase);

//     if (promptLowerCase === correctAnswer1 || promptLowerCase === correctAnswer2) {
//         alert(correctResponse);
//         score++;
//     } else {
//         alert(incorrectResponse);
//     }
// }

// // Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// // Indicates through an alert if the guess is “too high” or “too low”.
// // It should give the user exactly four opportunities to get the correct answer.
// // After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// // Question 6
// let correctAnswer = 7;
// let numberOfGuesses = 4;
// for (let i = 0; i < numberOfGuesses; i++) {
//     console.log(i);
//     let userGuess = prompt('Guess a number between 1 and 10.');
//     while (userGuess <= 0 || userGuess > 10) {
//         userGuess = prompt('Please enter a number between 1 and 10.');
//     }
//     if(userGuess == correctAnswer) {
//         alert('You got it right!');
//         score++;
//         break;
//     } else if (userGuess > correctAnswer) {
//         alert('Too high');
//     } else if (userGuess < correctAnswer) {
//         alert ('Too low');
//     } else {
//         alert ('Something went wrong. :(');
//     }
// }


// // Add a 7th question that has multiple possible correct answers that are stored in an array.
// // Give the user 6 attempts to guess the correct answer.
// // The guesses will end once the user guesses a correct answer or they run out of attempts.
// // Display all the possible correct answers to the user. Consider using a loop of some sort for this question.

// // Question 7

// // array of cities I've been
// let cityArray = ['calgary', 'sydney', 'beijing', 'glasgow', 'london', 'inverness', 'xi\'an', 'san francisco', 'new york'];
// // maximum number of guesses
// let cityGuesses = 6;
// // flag to indicate the correctg answer
// let correctCity = false;

// while (!correctCity && cityGuesses > 0) {
//     let userCityGuess = prompt('Can you guess a city I\'ve been to? You have ' + cityGuesses + ' attempt(s) left.');
//     let userCityGuessLower = userCityGuess.toLowerCase();
//     // check if guess matches ANY of the cities
//     for (let i = 0; i < cityArray.length; i++) {
//         // check if guess matches EACH city
//         if (userCityGuessLower === cityArray[i]) {
//             alert('Ahh, you know where I\'ve traveled. You know me well. :)')
//             correctCity = true;
//             score++;
//             break;
//         }
//     }
//     if (correctCity) {
//         alert('Great job; here is a list of all of the choices: ' + cityArray[0] + ', ' + cityArray[1] + ', ' + cityArray[2] + ', ' + cityArray[3] + ', ' + cityArray[4] + ', ' + cityArray[5] + ', '+ cityArray[6] + ', '+ cityArray[7] + ', '+ cityArray[8]);
//     }
//     if (!correctCity && cityGuesses <= 5 && cityGuesses > 1) {
//         alert('Sorry, you are incorrect. Please guess again.')
//     }
//     if (!correctCity && cityGuesses === 1) {
//         alert('Sorry, you are incorrect. That was your last guess. Here were all of the possible options: ' + cityArray[0] + ', ' + cityArray[1] + ', ' + cityArray[2] + ', ' + cityArray[3] + ', ' + cityArray[4] + ', ' + cityArray[5] + ', '+ cityArray[6] + ', '+ cityArray[7] + ', '+ cityArray[8] + '.');
//     }
//     cityGuesses--;
//     // this is added outside of the nested loop but inside the outer loop in order to decrement one, or else the number will keep looping with the same number of guesses as defined and won't decrement the number at all
// }

// alert ('Thank you for playing my game! You got ' + score + ' correct!')


