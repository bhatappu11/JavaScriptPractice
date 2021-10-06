
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the value of n: ', number => {
   let factorArr = [];
   for(let i = 2; i*i<= number; i++) {
       while(number%i == 0) {
          factorArr.push(i);
          number = number/i;
       }
    }
    if(number >2) {
       factorArr.push(i);
    }
   console.log("Prime Factors: "+factorArr);
});