function getThreeDigitRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomArr = [];
for(let index=0;index<10;index++){
    randomArr.push(getThreeDigitRandomNumber(100,999));
}
console.log("Array: "+randomArr);
let biggest = randomArr[0];
let secondBiggest = randomArr[0];
    for(let i=0;i<randomArr.length;i++){
        if(randomArr[i]>biggest){
            secondBiggest = biggest;
            biggest = randomArr[i];
        }
        else if(randomArr[i]>secondBiggest && randomArr[i]!=biggest)
            secondBiggest = randomArr[i];
    }
    
console.log("Second largest: "+secondBiggest);
let smallest = randomArr[0];
let secondSmallest = randomArr[0];
    for(let i=0;i<randomArr.length;i++){
        if(randomArr[i]<smallest){
            secondSmallest = smallest;
            smallest = randomArr[i];
        }
        else if(randomArr[i]<secondSmallest && randomArr[i]!=smallest)
            secondSmallest = randomArr[i];
    }
    
console.log("Second smallest: "+secondSmallest);