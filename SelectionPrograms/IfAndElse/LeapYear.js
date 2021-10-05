const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the year: ',year => {
    if(year % 100 != 0){
        if(year % 4 == 0){
            console.log("leap year");
        }
        else{
            console.log("not a leap year");
        }
    }
    else{
        if(year % 400 == 0){
            console.log("leap year");
        }
        else{
            console.log("not a leap year");
        }
    }
    readline.close();
});