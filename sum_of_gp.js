const firstTerm = 2;
const ratio = 4;
let currentTerm = firstTerm;
const termsNeeded = 7;
let sumOfTerms = 0;

for(let count = 1; count <= termsNeeded; count++){
    sumOfTerms = sumOfTerms + currentTerm;
    console.log(currentTerm);
    currentTerm = currentTerm * ratio;
}
console.log("Sum of this gp series is",sumOfTerms);
