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
let i=10;
for(let i=1; i<5; i++){
    console.log(i);
}
console.log('i...',i);

console.log('--------------------')
let tf='';
if(tf)
    console.log('true');
else
    console.log('false');

console.log('--------------------')
//배열
let arr=[10,20,30];
console.log(arr.length);
for(let i=0; i<arr.length; i++)
    console.log(arr[i]);

//함수
let fn=function(){
    console.log('function!!!');
}
fn();

console.log(typeof arr);
console.log(typeof(arr)); //배열 object
console.log(typeof fn);
console.log(typeof(fn)); //function

console.log('--------------------')
let person={}; 
console.log(typeof person); //객체 object

console.log(Array.isArray(arr)); //true
console.log(Array.isArray(person)); //false

console.log('--------------------')
let x = '10';
let y = 20;
let z = x+y;
console.log(typeof z,z); //string 1020
console.log(typeof(10.2), 10/2); //number 5
console.log(typeof('10'/2), '10'/2); //number 5
console.log(typeof('x'/2), 'x'/2); //number NaN

console.log('--------------------')
console.log(Boolean(''), Boolean(''))
console.log(Boolean(0), Boolean('0'))
console.log(Number('10'), Number('aa'), Number(null), Number(undefined))
console.log(String(0))

console.log('--------------------')
// 출력
// 숫자형 : parseInt parseFloat Number
let name = 'harin kim';
let score = 100;
console.log('name: '+name+", score",score); //name: harin kim, score 100
console.log('name:', name, "score: ", score); //name: harin kim, score 100
console.log(`name: ${name}, score:${score}`); //name: harin kim, score 100

console.log('--------------------')
// 연산자
// 단항 연산자 : ++, --
/*
let a=20;
let b=++a; (전위 연산)
let c=a++; (후위 연산)
*/
let q = 10;
let w = q++;
console.log(`q:${q}, w:${w}`);

// 이항 연산자
//산술 연산자
let t1=10;
let t2=3;
console.log(t1+t2);
console.log(t1*t2);
console.log(t1/t2);
console.log(t1%t2);
console.log(t1**t2);
//연결 연산자
console.log(10+20+'aaa'); //30aaa
console.log('aaa'+10+20); //aaa1020
//비교 연산자
console.log(10>=10);
let s='10';
let d=10;
console.log(s==d); //true
console.log(s===d); //false


let m1={name:'hong', age:20};
let m2=m1;
let m3={name:'hong', age:20};

console.log(m1==m2, m1===m2); //true true
console.log(m1==m3, m1===m3); //false false