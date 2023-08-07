
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

let name = 'kim'; //전역변수
function prt(){
    let test = 'hong'; //지역변수
    console.log(name,test);
}
prt();
console.log('----------------')
console.log(name, test);
