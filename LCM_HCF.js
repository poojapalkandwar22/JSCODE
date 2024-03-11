//Write a program to take two numbers from the user as input and obtain the HCF and LCM of the two numbers.

const input = require("readline-sync");
let A = input.questionInt("Enter A = ");
let B = input.questionInt("Enter B = ");
let smaller
if(A>B)
{
    smaller=B;
}
else
{
    smaller =A;
}
let i=1;
while(i<=smaller)
{
    if(A%i==0 && B%i==0)
    {
        HCF = i
    }
    i++;
}
let LCM = (A*B)/HCF;
console.log(HCF,LCM,"\n");