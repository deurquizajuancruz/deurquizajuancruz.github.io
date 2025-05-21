"use strict";

const prompt = require("prompt-sync")();

let tries = 5;
let maxDigits = 3;
const maxValues = {
  3: 1000,
  4: 10000,
  5: 100000,
  6: 1000000,
};
const guessNumber = Math.floor(Math.random() * maxValues[maxDigits])
  .toString()
  .padStart(maxDigits, "0");

const check = (guess) => {
  let correct = 0;
  for (let i = 0; i < maxDigits; i++) {
    if (guess[i] == guessNumber[i]) {
      correct++;
    }
  }
  return correct;
};

console.log("Guess the secret number!");
console.log(guessNumber);
for (let i = 0; i < tries; i++) {
  let guess = prompt(
    `Introduce your number of ${maxDigits} digits: `
  ).toString();
  if (isNaN(guess) || guess.length != maxDigits) {
    console.log("Please, enter a valid number.");
    i--;
    continue;
  }
  let correct = check(guess);
  if (correct == maxDigits) {
    console.log("Congrats, you have guessed the secret number!");
    break;
  } else {
    console.log(`You have guessed ${correct} digits correctly`);
    console.log(`You have ${tries - (i + 1)} tries remaining`);
  }

  if ((tries - 1) === i) {
    console.log(`Too bad! You didn't win. The number was: ${guessNumber}`);
  }
}