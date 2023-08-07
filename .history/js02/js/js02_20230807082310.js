"use strict"
// let, const, var

let a=30;
{
    let a = 10;
    console.log('block-a',a);
}
console.log('global-a',a);