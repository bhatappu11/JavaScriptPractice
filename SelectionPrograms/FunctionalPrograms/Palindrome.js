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

readLine.question("Enter number: ", (num) =>{
    if(isPalindrome(Number(num)))
        console.log("Palindrome");
    else
        console.log("Not Palindrome");
    readLine.close();
});