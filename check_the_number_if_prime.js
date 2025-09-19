let divisor = 2;
const inputNumber = 133;
let divisible = false;

while(divisor < inputNumber && inputNumber !== 2){
    if (inputNumber % divisor === 0){
        divisible = true;
    }
    divisor++;
}
let isPrime = (divisible) ? "Is composite." : "Is prime";

console.log(inputNumber,isPrime);
