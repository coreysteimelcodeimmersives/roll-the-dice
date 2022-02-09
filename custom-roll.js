const prompt = require('prompt-sync')();

let numSides = Number(prompt("How many sides would you like your dice to be? "));

if (numSides === 0 || numSides === 1){
    console.log("You can't really have a Zero-Sided or a One-Sided Dice in this realm. Run the program again and choose a number greater than 1.")
    return;
}

let randNum = Math.random();

let dice = Math.ceil(randNum * numSides);

console.log("You got the number " + dice + " on your " + numSides + "-sided dice.");

