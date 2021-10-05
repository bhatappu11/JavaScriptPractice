
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the value of n: ', number => {
    for(let i = 2; i*i<= number; i++) {
        while(number%i == 0) {
           console.log(i+" ");
           number = number/i;
        }
     }
     if(number >2) {
        console.log(number);
     }
    
});
