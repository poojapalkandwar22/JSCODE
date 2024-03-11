//Write a program to take N numbers from a user as input, and print the maximum and minimum values among the given set of N numbers. Also, take N from the user as input.
const input = require("readline-sync")
let N = input.questionInt("enter number ");
let a= input.questionInt("enter 1st num = ");
//let i = a; 
let max=a; let min=a;
let B;
let i=1;
while(i<N)
{
    B= input.questionInt("enter next num = ");
    if(B<min)
    {
        min=B;
        if(B>max)
        {
            max=B;
        }
    }
    else
    {
        if(B>max)
        {
            max=B;
        }
    }
    i++;
}
console.log("max is= ",max)
console.log("min is= ",min)
