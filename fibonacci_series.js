let secondLastTerm = 0;
let lastTerm = 1;
let currentTerm;
const termsNeeded = 9;

for(let count = 1;count <= termsNeeded; count++){
    currentTerm = secondLastTerm;
    secondLastTerm = secondLastTerm + lastTerm;
    lastTerm = currentTerm;
    console.log(currentTerm);
}
