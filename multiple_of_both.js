const input = require("readline-sync");
let x = input.questionInt("enter x");
//let y = input.questionInt("enter y");
if(x%2==0)
{
    console.log("the num is",x);
}
else
{
    console.log("the num is = ",x*2);
}
