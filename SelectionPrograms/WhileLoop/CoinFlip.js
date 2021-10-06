function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
let numberOfTails=0,numOfHeads=0;
while(numOfHeads <= 11 || numberOfTails <= 11){
    let result = coinFlip();
    console.log(result);
    if(result=='heads')
        numOfHeads++;
    else
        numberOfTails++;
}