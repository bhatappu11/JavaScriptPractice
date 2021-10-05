
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the value of n: ', n => {
    let nthHarmonic = 1;
		if(n!=0) {
			for (let i = 2; i <= n; i++) {
				nthHarmonic += 1 / i;
			}
			console.log("Nth harmonic value is "+nthHarmonic);
		}
		else
			console.log("N should be greater than zero");

});
