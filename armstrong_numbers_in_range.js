const startOfRange = 1;
const endOfRnage = 99999;
    
for(let count = startOfRange; count <= endOfRnage ; count++){
    let inputNum = count;
    let auxilaryNum = inputNum * 10;
    let unitNum = 0;
    let sum = 0;
    let noOfDigits;

    if(count < 10){
        noOfDigits = 1;
    }else if(count < 100){
        noOfDigits = 2;
    }else if(count < 1000){
        noOfDigits = 3;
    }else if(count < 10000){
        noOfDigits = 4;
    }else{
        noOfDigits = 5;
    }

    for(let count1 = 1; count1 <= noOfDigits ;count1++){
        auxilaryNum = (auxilaryNum - unitNum) / 10;
        unitNum = auxilaryNum % 10;
        sum = sum + (unitNum ** noOfDigits);
    }

    if(sum === inputNum){
    console.log(inputNum,"is an armstrong number");
    }
}
