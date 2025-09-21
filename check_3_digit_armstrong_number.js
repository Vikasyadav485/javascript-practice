let inputNum = 9475;
let auxilaryNum = inputNum * 10;
let unitNum = 0;
let sum = 0;
    
for(let count1 = 1; count1 <= 4 ;count1++){
        auxilaryNum = (auxilaryNum - unitNum) / 10;
        unitNum = auxilaryNum % 10;
        sum = sum + (unitNum ** 4);
}

if(sum === inputNum){
    console.log(inputNum,"is an armstrong number");
}else{
    console.log(inputNum,"is not an armstrong number.");
}
