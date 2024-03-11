const input = require("readline-sync");
let N = input.questionInt("enterr N: ");
let A = input.questionInt("enter A: " );
let max =  A;
let smax = A;
let i = 1;
while(i<N)
{
    let B = input.questionInt("enter Next Number: " );
    if(B>max)
    {
        smax= max;
        max=B;
    }
    else if(B>smax)
    {
        smax=B;
    }
    i++;
}
console.log("second max is= ",smax);

