//구조 분해 할당 : 배열
//베열이나 객체 속성을 해체해서 개별 변수에 담는 것
/*
let [a, b] = [10, 20];
console.log('a :', a);
console.log('b :', b);
console.log('-------------------------------')
let [t1, t2, ...t3] = [100, 200, 300, 400];
console.log(t1);
console.log(t2);
console.log(t3);

console.log('-------------------------------')
let [su1, su2] = [100, 200];
console.log(`su1:${su1}, su2:${su2}`); //su1:100, su2:200
[su2, su1] = [su1, su2];
console.log(`su1:${su1}, su2:${su2}`); //su1:200, su2:100
*/

//구조 분해 할당 : 객체
/*
let man = {
    irum : 'hong'
    , age : 20
    , addr : 'seoul'
}

let {irum, age, addr} = man;
console.log(`irum : ${irum}, age : ${age}, addr : ${addr}`);
*/

let [a,b,c] = [1,2];
console.log(a,b,c); //1 2 undefined

let [t1=10, t2=10, t3=10] = [1, 12];
console.log(t2,t2,t3); //1 2 10

// let[a,...,b] = ['test1', 'test2', 'test3', 'test4']
// console.log(a,b);

// let [a,b] = [10,20];
// [a,b] = [b,a];
