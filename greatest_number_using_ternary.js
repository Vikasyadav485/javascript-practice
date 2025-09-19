const inputNum1 = 34;
const inputNum2 = 93;
const inputNum3 = 56;

let greatestNumber = (inputNum1 > inputNum2 && inputNum1 > inputNum3) ? inputNum1 : ((inputNum2 > inputNum1 && inputNum2 > inputNum3) ? inputNum2: inputNum3);

console.log("The greatest number is",greatestNumber);
