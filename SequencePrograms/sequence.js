let singleDigit = Math.floor(Math.random() * 10);
console.log(singleDigit);

let diceNumber = 1 + Math.floor(Math.random() * 6);
console.log(diceNumber);

function getDiceNumber(){
    return 1 + Math.floor(Math.random() * 6);
}

let dice1 = getDiceNumber();
let dice2 = getDiceNumber();
let add = dice1+dice2;
console.log("Dice Numbers: "+dice1,dice2);
console.log("Dice Sum: "+add);
