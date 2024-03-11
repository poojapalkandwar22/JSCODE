const input = require("readline-sync");
let x = input.questionInt("enter x");
let y = input.questionInt("enter y");
let t = x;
x = y;
y = t;
console.log("x is ", x ,"and y is", y);