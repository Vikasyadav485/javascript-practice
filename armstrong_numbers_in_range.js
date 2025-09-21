const startOfRange = 1000;
const endOfRnage = 9999;
    
for(let count = startOfRange; count <= endOfRnage ; count++){
    let inputNum = count;
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
    }
}
