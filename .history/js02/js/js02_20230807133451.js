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
/*
let i=10;
for(let i=1; i<5; i++){
    console.log(i);
}
console.log(i);

console.log('--------------------');
let tf='';
if(tf)
    console.log('true');
else
    console.log('false');
*/
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
/*-----------연산자-----------*/
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
console.log(typeof m1, typeof m2, typeof m3); //object object object
console.log(m1==m2, m1===m2); //true true
console.log(m1==m3, m1===m3); //false false

console.log(null==undefined); //true
console.log(null===undefined); //false
console.log(false==''); //true
console.log(false==0); //true
console.log(false===0); //false

//복합 대입 연산자
let x1=10;
console.log(x1); //10
x1+=30; //x1=x1+30
console.log(x1); //40
x1/=4; //x1=x1/4
console.log(x1); //10

let x2=10;
let x3=20;
let x4=4;
x4*=x2+x3 //우측 먼저 계산
console.log(x4) //120

//조건 연산자
let max;
let su1=10;
let su2=20;
max=(su1>su2)? su1:su2;
console.log(max); //20

//비트 연산자
let aa=10; //1010
console.log('aa',aa>>2); //*2 1/2^n 0010 -> 2
console.log(aa<<2); //%2 101000 -> 40

//논리 연산자
console.log(10>=10 && 10!==10); //t&&f => false
console.log(10!==10 && 10>=10); //f&&뒤 안봐도 됨 => false
console.log(10>=10 || 10!==10); //true
console.log(10!==10 || 10>=10); //true

console.log('--------------------')
/*-----------제어문-----------*/
//블록문
//조건문 - if
/*
let kor=80
if(kor>=90)
    console.log('수');
else if(kor>=80)
    console.log('우');
else if(kor>=70)
    console.log('미');
else if(kor>=60)
    console.log('양');
else 
    console.log('가');

    document
    .getElementById('btn')
    .onclick=function(){
        let elekor = document.getElementById('kor');
        let kor = Number(elekor.value);
        console.log(elekor); 
        // let kor=elekor.value; //값 받아오기
        console.log(kor);
        elekor.value='' //값 지우기
    }
*/
/*
//html에서 값 받아와서 출력
    document
    .getElementById('btn')
    .onclick=function(){
        let elekor = document.getElementById('kor');
        let kor = Number(elekor.value);
        elekor.value=''
        let eleeng = document.getElementById('eng');
        let eng = Number(eleeng.value);
        eleeng.value=''
        let elemath = document.getElementById('math');
        let math = Number(elemath.value);
        elekor.value=''

        let avg=(kor+eng+math)/3;
        let result="<li> 평균점수: "+avg;
        if(kor>=90 && eng>=90 && math>=90)
            result+="<li>very good</li>";
        else if(kor>=90 || eng>=90 || math>=90)
            result+="<li>good</li>";
        else
            result+="<li>bad</li>";

        document.getElementById('result')
        .innerHTML = '결과 : '+ result;
    }
*/


//조건문 - switch
/*
let sus=2000;
let data='';
switch(sus) 
{
    case 5:
        data+='5';
        break;
    case 4:
        data+='4';
        break;
    case 3:
        data+='3';
        break;
    case 2:
        data+='2';
        break;
    case 1:
        data+='1';
        break;
    default:
        data+='나머지 경우';
}
console.log(data);
*/
console.log('--------------------')
// let num = prompt('숫자를 입력하세요',0);
// console.log(a);

//숫자를 입력받아서 3으로 나누면 3의 배수, 4로 나누면 나머지1, 5로 나누면 나머지 2
/*
let num1 = Number(prompt('숫자를 입력하세요'));
let num2 = (num1%3)
switch(num2)
{
    case 0:
        console.log('3의 배수');
        break;
    case 1:
        console.log('나머지는 1');
        break;
    case 2:
        console.log('나머지는 2');
        break;
}
*/

//반복문 - for
for(let i=10; i<15; i++){
    console.log('i: ',i);
}

