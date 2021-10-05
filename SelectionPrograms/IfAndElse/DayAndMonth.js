let date = 0;
let month = 0;

process.argv.forEach(function(val,index,array) {
    if(index == 2) date = val;
    if(index == 3) month = val;
});

let numOfDays = [31,30];

if(month >= 3 && month <= 6){
    if(month == 3 || month == 5){
        if(date>=20 && date <= numOfDays[0]){
            console.log("true");
        }else {
            console.log("false");
        }
    }
    else if(month == 4 || month == 6){
        if(date>=20 && date <= numOfDays[1]){
            console.log("true");
        }else {
            console.log("false");
        }
    }    
    else {
        console.log("false");
    }
}else{
    console.log("false");
}