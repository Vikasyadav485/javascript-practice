const inputNum1 = 1;
const inputNum2 = 96;
const inputNum3 = 512;
const inputNum4 = 13;
let divisible = false;
let lcm;
let count = 1;

while(!divisible){
    if(count % inputNum1 === 0 && count % inputNum2 === 0 && count % inputNum3 === 0 && count % inputNum4 === 0){
        lcm = count;
        divisible = true;
    }count ++;
}
console.log("LCM of",inputNum1,inputNum2,inputNum3,"and",inputNum4,"is",lcm);
