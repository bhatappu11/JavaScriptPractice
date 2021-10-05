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

function getTwoDigitRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let sum = 0;
for(let i=1;i<=5;i++) {
    let number = getTwoDigitRandomNumber(10,99);
    console.log("Number: "+number);
    sum += number;
}
console.log("Sum: "+sum);
let average = sum/5;
console.log("Average: "+average);
