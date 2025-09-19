const firstNumber = 1;
const difference = 2;
let sumOfAP = 0;
let termOfAP = firstNumber;
const termsLimit = 5;
let count = 1;

while(count <= termsLimit){
    console.log(termOfAP);
    sumOfAP = sumOfAP + termOfAP;
    termOfAP = termOfAP + difference;
    count++;
}
console.log("Sum of all terms in AP is",sumOfAP);
