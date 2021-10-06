const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(number){
    var remainder, originalNumber, reversedNumber = 0;

    originalNumber = number;
    while (number > 0) 
    {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber * 10 + remainder;
    }
    if (reversedNumber == originalNumber) 
    {
        return true
    }
    else {
        return false
    }
}
function isPrime(number){
    let isPrime = true;
    if (number === 1){
        isPrime = false;
    }else if (number > 1){
        for (let i = 2; i < number; i++) {
            if (number % i == 0){
                isPrime = false;
                break;
            }
        }
    }
    return isPrime
}

readLine.question("Enter number: ", (num) =>{
    if(isPalindrome(num))
        console.log("Number is palindrome");
    else
        console.log("Number is not palindrome");
    if(isPrime(num))
        console.log("Number is prime");
    else
        console.log("Number is not prime");
});