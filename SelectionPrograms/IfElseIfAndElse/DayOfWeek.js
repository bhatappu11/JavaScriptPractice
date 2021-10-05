let number = 1+ Math.floor(Math.random() * 10) % 7;
console.log(number);
if(number == 1){
    console.log("Sunday");
}else if(number == 2){
    console.log("Monday");
}else if(number == 3){
    console.log("Tuesday");
}else if(number == 4){
    console.log("Wednesday");
}else if(number == 5){
    console.log("Thursday");
}else if(number == 6){
    console.log("Friday");
}else {
    console.log("Saturday");
}