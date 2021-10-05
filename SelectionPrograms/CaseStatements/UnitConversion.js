let a = 0;
process.argv.forEach(function(val,index,array) {
    if(index == 2) a = val;
});
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter 1:feet to inch 2:feet to meter 3:inch to feet 4.meter to feet: ', number => {
    switch(number) {
        case '1':
            console.log(a*12);
            break;
        case '2':
            console.log(a/3.281);
            break;
        case '3':
            console.log(a/12);
            break;
        case '4':
            console.log(a*3.281);
            break;
    }
});
