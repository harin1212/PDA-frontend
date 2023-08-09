"use strict" //엄격하게

let a1 = [10,20,30];
let a2 = a1;

console.log(a1===a2);
//사용되는 정보
a1.forEach(item => {
    console.log(item);
});