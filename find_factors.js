let divisor = 2;
const inputNumber = 1331;
let divisible = false;
let factor;
let copiedNumber = inputNumber;

while(divisor < copiedNumber && copiedNumber !== 2){
    if(copiedNumber % divisor === 0){
        divisible = true;
    }divisor++;
}

divisor = 2;

if(divisible){
    while(divisor <= copiedNumber ){
        if (copiedNumber % divisor === 0){
            factor = divisor;
            divisor = 1;
            copiedNumber = copiedNumber / factor;
            console.log(factor )
        }
    divisor++;
    }
}

let isPrime = (divisible) ? "Is composite." : "Is prime";

console.log(inputNumber,isPrime);
