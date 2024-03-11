const input = require("readline-sync")
let N = input.questionInt("enter number")
let sum=0,R;
let P=N;
while(N>0)
{
    R=N%10;
    sum=sum*10+R;
    N=Math.floor(N/10);
   // console.log(N);
}
if(sum==P)
{
    console.log("Yes");
}
else
{
    console.log("No");
}
