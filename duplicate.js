const input = require("readline-sync");
let N = input.questionInt("enter the size of the array:- ");
let Arr = [];
let k=0;
for(let i=0;i<N;i++)
{
    Arr[i]= input.questionInt();
}
let duplicate = [];
for(let i=0;i<N;i++)
{
    c=0;
    for(j=i+1;j<N;j++)
    {
        if(Arr[i]==Arr[j])
        {
            c++;
        } 
    }
    if(c==1)
    {
        //let k=0;
        duplicate[k]=Arr[i];
        k++;
    }
    
}

console.log(duplicate);

