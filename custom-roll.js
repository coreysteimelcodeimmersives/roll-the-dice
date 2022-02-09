const prompt = require('prompt-sync')();

let numSides = Number(prompt("How many sides would you like your dice to be? "));

let randNum = Math.random();

let dice = Math.ceil(randNum * numSides);

console.log("You got the number " + dice + " on your " + numSides + "-sided dice.");

