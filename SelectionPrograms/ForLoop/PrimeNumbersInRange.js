
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the value of n: ', n => {
    for(let number=1;number<=n;number++){
    let isPrime = false;
		if(number <= 1)
			isPrime = false;
		else if(number == 2)
			isPrime = true;
		else if(number % 2 == 0)
			isPrime = false;
		else {
		for(let index=3; index <= Math.sqrt(number); index += 2) {
			if(number % index == 0)
				isPrime = false;
			}
		isPrime = true;
		}
		if(isPrime == true)
			console.log(number+"- It is a prime number");
		else
			console.log(number+"- It is NOT a prime number");
    }
});
