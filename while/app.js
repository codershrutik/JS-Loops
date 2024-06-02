// let count = 0;
// while(count<10){
//     count++;
//     console.log(count);
// }

//Guessing game
let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum = parseIny(prompt("Enter a valid number"));
}
const targetNum = Math.floor(Math.random()*maximum)+1;
console.log(targetNum);

let guess = parseInt(prompt("Entre your first guess!"));
let attempts = 1;

while(guess !== targetNum){
    attempts++;
    if(guess > targetNum){
        guess = parseInt(prompt("Too high! Enter a new guess"));
    } else{
        guess = parseInt(prompt("Too low! Enter a new guess"));
    }
}
console.log(`you got it! It took you ${attempts} guesses`);