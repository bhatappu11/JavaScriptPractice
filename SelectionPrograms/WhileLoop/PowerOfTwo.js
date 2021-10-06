
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the value of n: ', number => {
    let power=0;
    console.log("the value of n:"+ number);
    let i=0;
    while(power<256 ){
        if(i<number){
            power=Math.pow(2,i);
            console.log("2^"+i+"="+power);
        }
        i++;
    }
    readline.close();
});
