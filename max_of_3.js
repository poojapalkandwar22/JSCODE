const input = require("readline-sync");
let A= input.questionInt("enter A =  ");
let B= input.questionInt("enter B =  ");
let C= input.questionInt("enter C =  ");
let max;

if(A>B)
{
    max= A;
    min= B;
}
else
{
    max=B;
    min=A;
}
if(max>C)
{
    max=max;
    min= C;
}
else
{
    max=C;
    min=max;
}
console.log(typeof(min));
console.log(max,min);
