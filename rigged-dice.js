const prompt = require('prompt-sync')();

let numSides = Number(prompt("How many sides would you like your dice to be? "));

if (numSides === 0 || numSides === 1){
    console.log("You can't really have a Zero-Sided or a One-Sided Dice in this realm. Run the program again and choose a number greater than 1.")
    return;
}

let riggedNum = Number(prompt("What would you like the rigged number to be to be? "));

if (riggedNum > numSides){
    console.log("You can't pick a rigged number that is great than the number of sides of the dice. Run the program again.")
    return;
}

let randNum2 = Math.random();

let riggedRoll = Math.floor(randNum2 * 2);

if (riggedRoll === 0){

    let randNum = Math.random();

    let dice = Math.ceil(randNum * numSides);

    console.log("You got the number " + dice + " on your " + numSides + "-sided dice.");

} else {
    console.log("You got the number " + riggedNum + " on your " + numSides + "-sided dice.");
}

