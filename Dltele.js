// DELETE ELEMENTS FROM THE ARRAY

// const input = require("readline-sync");
// let N =  input.questionInt("enter size");
// let Arr=[]
// let m = input.questionInt("enter element to be deleted")
// for(let i=0;i<N;i++)
// {
//      Arr[i] = input.questionInt();
// }
// for(let i=m;i<N-1;i++)
// {
//     Arr[i]=Arr[i+1];
// }
// N=N-1;
// for(let j=0;j<N;j++)
// {
//     console.log(Arr[j]);
// }


// ADD ELEMENTS IN THE ARRAY
const input = require("readline-sync");
let N = input.questionInt("enter N");
let m = input.questionInt("enter index");
let Newel = input.questionInt("enter element to enter  ")
let Arr = [];
let i;
for( i=0;i<N;i++)
{
    Arr[i] = input.questionInt();
}
for( i=N-1;i>=m;i--)
{
    Arr[i+1]=Arr[i];
}
Arr[i+1]=Newel;

console.log(Arr)