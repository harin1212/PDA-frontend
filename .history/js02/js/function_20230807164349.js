
//함수
/*
function move1(){
    console.log('move1-1');
    console.log('move1-2');
}
move1(); //함수 호출

console.log('------------------');
function move2(name, age){
    console.log(`name: ${name}, age: ${age}`);
    console.log('움직입니다!!');
}
move2('hong',20);

console.log('------------------');
function getData(){
    let num=100;
    return num; //매개변수 반환 o
}
let num = getData();
console.log('값은:' + num);

//두개의 숫자를 받아서 더하는 기능을 구현하시오.
console.log('------------------');
let num1 = 10;
let num2 = 20;
function add(a, b){
    console.log(a+b); //바로 출력
    return a + b;
}
let res = add(num1, num2);
console.log(res);

*/
/*
//call by value
function prt(arg){
    console.log(arg, typeof arg);
}
prt(10); //10을 복사해서 arg에 줌

//call by reference
// arr → [10,20,30]
// prt2 arr → arg → [10,20,30]
function prt2(arg){
    console.log(arg, typeof arg);
}
let arr = [10,20,30];
prt2(arr);
*/

//global scope, local scope
/*
let name = 'kim'; //전역변수
function prt(){
    let test = 'hong'; //지역변수
    console.log(name,test);

    for(var i=1; i<10 ; i++){
        console.log(i);
    }
    console.log(i);
}
prt();
//console.log(name, test); //지역변수 test 사용해서 에러남
*/


//함수 표현식
/*
const prt = function(name,age){
    console.log('prt');
}
prt();

const prt2 = function(name='hello', age=0){ //default : undefined 안됨
    console.log('name : ', name);
    console.log('age : ',age);
}
prt2('test',20);
*/

//rest parameter
/*
const show = function(...name){ //rest parameter: 파라미터 몇 개인지 상관 없음
    for(let i=0; i < name.length; i++){
        console.log(name[i]);
    }
    for(let a of name){
        console.log(a)
    }
}
show();
console.log('---------parameter 1---------');
show('a1');
console.log('---------parameter 2---------');
show('a1','a2');
*/

//spread syntax
/*
let arr1=[10,20,30];
let arr2=[100,200,300];
let arr3 = [...arr1, ...arr2]; //rest parameter

let prt = function(t){
    console.log(t[1]); //20
}
prt(arr3);
*/

//화살표 함수 표현식
/*
let add = function(a,b){
    return a+b;
}
let tot=add(10,20);
console.log(tot);

let prt=()=>"hong"; //중괄호 없음 : return 하겠다
let result = prt();
console.log(result);

let prt2=()=>{
    console.log('test1');
    console.log('test2');
}
prt2();

let prt3=(a,b)=>{
    console.log('a:', a, 'b:', b);
}
prt3('test','test2');
*/

//콜백 함수
let fn = function(a, b, t1){
    console.log(a, b);
    t1(a,b); //콜백함수
}
let add = function(num1, num2){
    console.log('add function', (num1 + num2));
}
fn(10,20,add); //add함수를 변수처럼 집어넣음 