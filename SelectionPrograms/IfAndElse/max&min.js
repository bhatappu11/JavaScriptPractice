function getThreeDigitRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min+1)) + min;
}
const arr = [];
for(let i=1;i<=5;i++) {
    let number = getThreeDigitRandomNumber(10,99);
    arr.push(number);
}
console.log("Numbers: "+arr);
let max = arr[0];
arr.forEach(element => {
    if(element>max){
        max = element;
    }
});
let min = arr[0];
arr.forEach(element => {
    if(element<min){
        min = element;
    }
});

console.log("max: "+max+" min: "+min);