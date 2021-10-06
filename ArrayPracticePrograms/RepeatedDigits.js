let repeatedDigitsArray = new Array();
let unitDigit;
let tensDigit;

for(let index=0;index<=100;index++)
{
    if(index>9)
    {
        unitDigit=index%10;
        tensDigit=parseInt(index/10);
        if(unitDigit==tensDigit)
        {
            repeatedDigitsArray.push(index)
        }    
    }
    
}
console.log(repeatedDigitsArray)