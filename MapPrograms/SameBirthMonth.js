let birthYear,birthMonthMap;
let birthYearMap = new Map();

birthYearMap.set(1992,new Map());
birthYearMap.set(1993,new Map());

for(let index=1;index<=50;index++){
    let year = Math.floor(Math.random() * 10) % 2;
    if(year == 0)
        birthYear = 1992;
    else 
        birthYear = 1993;
    birthMonthMap = birthYearMap.get(birthYear);
    let birthMonth = 1 + Math.floor(Math.random() * 100) % 12;
    if(birthMonthMap.has(birthMonth)){
        let sameBirthMonthArray = birthMonthMap.get(birthMonth);
        sameBirthMonthArray.push(index);
        birthMonthMap.set(birthMonth, sameBirthMonthArray);
    }else {
        let sameBirthMonthArray = new Array();
        sameBirthMonthArray.push(index);
        birthMonthMap.set(birthMonth, sameBirthMonthArray);
    }
    birthYearMap.set(birthYear, birthMonthMap)
}
console.log("People with same birth month: ");
console.log(birthYearMap)