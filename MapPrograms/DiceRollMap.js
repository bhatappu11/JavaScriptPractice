let diceRollMap  = new Map();
let maximumOccuredNumber=Infinity;
let miniminOccuredNumber=Infinity;
let miniminOccuredNumberCount=Infinity;
let maximumOccuredNumberCount=0;

while(!(Array.from(diceRollMap.values()).includes(10)))
{
    let diceNumber=(Math.floor(Math.random()*10)%6)+1
    if(diceRollMap.has(diceNumber))
    {
        diceRollMap.set(diceNumber,diceRollMap.get(diceNumber)+1)
    }
    else
    {
        diceRollMap.set(diceNumber,1)
    }

}
console.log("Dice values and number of times it has occured: ")
console.log(diceRollMap)

for (const [key, value] of diceRollMap.entries()) 
{
    if(value>maximumOccuredNumberCount)
    {
        maximumOccuredNumberCount=value;
        maximumOccuredNumber=key;
    }
    else if(value<miniminOccuredNumberCount)
    {
        miniminOccuredNumberCount=value;
        miniminOccuredNumber=key;
    }   
}

console.log("Most Occured number: "+maximumOccuredNumber+" with count "+maximumOccuredNumberCount+" times")
console.log("Least Occured number: "+miniminOccuredNumber+" with count "+miniminOccuredNumberCount+" times")
