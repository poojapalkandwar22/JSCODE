const input = require("readline-sync")
let N = input.questionInt("enter number ");
let sum=0;
for(i=1;i<N;i++)
{
    if(N%i==0)
    {
        sum=sum+i;
    }
}
if(sum===N)
{
    console.log("it is Perfect");
}
else
{
    console.log("it is not Perfect")
}
