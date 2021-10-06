function getThreeDigitRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomArr = [];
for(let index=0;index<10;index++){
    randomArr.push(getThreeDigitRandomNumber(100,999));
}
console.log(randomArr)