const inputNum1 = 16;
const inputNum2 = 40;
const inputNum3 = 64;
const inputNum4 = 512;
let divisible = false;
let hcf;

let count = (inputNum1 < inputNum2 && inputNum1 < inputNum3 && inputNum1 < inputNum4)? inputNum1: ((inputNum2 < inputNum1 && inputNum2 < inputNum3 && inputNum2 < inputNum4)? inputNum2: ((inputNum3 < inputNum1 && inputNum3 < inputNum2 && inputNum3 < inputNum4)? inputNum3: inputNum4));

while(!divisible){
    if(inputNum1 % count === 0 && inputNum2 % count === 0 && inputNum3 % count === 0 && inputNum4 % count === 0){
        hcf = count;
        divisible = true;
    }count--;
}
console.log("HCF of",inputNum1,inputNum2,inputNum3,"and",inputNum4,"is",hcf);
