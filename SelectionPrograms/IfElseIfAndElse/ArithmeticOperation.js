let a=0,b=0,c=0;
process.argv.forEach(function(val,index,array) {
    if(index == 2) a = val;
    if(index == 3) b = val;
    if(index == 4) c = val;
});
let op1 = a+b*c;
let op2 = c+a/b;
let op3 = a%b+c;
let op4 = a*b+c;

let result = [];
result.push(op1);
result.push(op2);
result.push(op3);
result.push(op4);
let min = result[0];
let max = result[0];
result.forEach(element => {
    if(element>max)
        max = element;
});
result.forEach(element => {
    if(element<min)
        min = element;
});
console.log("max: "+max+" min: "+min);