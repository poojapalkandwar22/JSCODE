// Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).

const input = require("readline-sync");
let A= input.questionInt("enter A =  ");
let B= input.questionInt("enter B =  ");
let C= input.questionInt("enter C =  ");
let D= input.questionInt("enter D =  ");
if(A>B)
{
    max=A;
    min=B;
}
else
{
    max=B;
    min=A;
}
if(C>D)
{
    max1=C;
    min1=D;
}
else
{
    max1=D;
    min1=C;
}
if(max>max1)
{
    maxi=max;
}
else
{
    maxi= max1;
}
console.log(maxi,"\n");