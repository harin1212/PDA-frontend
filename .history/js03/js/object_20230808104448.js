

//--------------------- 객체 생성 ---------------------
//1. function() 생성자 함수
/*
const op = new Function("a", "b", "return a+b");

let result = op(10,20);
console.log('result',result);
*/

//2. Object 생성자 함수
let person1 = new Object();
person1.name = "홍길동"; //속성 부여
person1.age = 20 ;
person1.addr = "서울";

console.log(`name:${person1.name}, age:${person1.age}, addr:${person1.addr}`);
console.log(person1); //객체 생성

person1.prt = function(){
    console.log('prt function!!!!');
}

console.log(typeof person1); //object (객체, 배열)
console.log(Array.isArray(person1)); //false