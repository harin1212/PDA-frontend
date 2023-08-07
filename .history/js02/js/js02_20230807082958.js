"use strict"
// let, const, var
//let, const : block scope

let a=30;
{
    let a = 10;
    console.log('block-a',a); //a:10
}
console.log('global-a',a); //a:30

var su=100;
{
    var su=10;
    console.log('block-su',su); //su:10
}
console.log('global-su',su); //su:10

console.log('--------------------')
// let i=10;
for(let i=1; i<5; i++){
    console.log(i);
}
console.log(i);