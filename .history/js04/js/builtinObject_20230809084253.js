"use strict" //엄격하게
/*
let a1 = [10,20,30];
let a2 = a1;
console.log(a1===a2);

//사용되는 정보 확인
a1.forEach(item => {
    console.log(item);
});

//a2 값 바꾸기 -> a1도 같이 바뀜
a2[1] = 100;
console.log('=====================')
a1.forEach(item => {
    console.log(item);
});
*/

//Object assign(target,...sources)
/*
let a = [10,20,30];
let newA = Object.assign([],a); //새로운 곳에 a를 복제해서 만들게
//newA 값 바꾸기 -> a 값 유지됨
newA[1] = 100;
a.forEach(item => {
    console.log(item);
})
console.log('=====================')
newA.forEach(item => {
    console.log(item);
})
*/

