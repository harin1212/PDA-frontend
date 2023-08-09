//"use strict" //엄격하게
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
//배열 복제
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
//객체 복제
/*
let p1 = {name: 'hong'}
console.log(p1)

Object.assign(p1,{age:10})
console.log(p1)
Object.assign(p1,{name:'park'});
console.log(p1)
*/
//두 객체가 같은지
/*
let o = new Object([10,20,30]);
let o2 = new Object([10,20,30]);

console.log(Object.s(o,o2)); //F : 메모리 다름
console.log(Object.is(o[0], o2[0])); //T : 값은 같음
let o3 = {};
Object.assign(o3,o2); //o3에 o2할당
let o4=o3;

console.log(Object.is(o2,o3)); //F : 복제한거임
console.log(Object.is(o3,o4)); //T : 메모리 같음
*/

//Q. 이메일과 도메인 나누기
//이메일 : aaa, 도메인 : aaa.com, Stirng
/*
//slice 이용
let email = "aaa@aaa.com";
let username = email.slice(0, email.indexOf("@"));
console.log(username);
let domain = email.slice(email.indexOf("@")+1);
console.log(domain);

//slice 이용 - 강사님
let loc = email.indexOf('@');
console.log(loc);
let e1 = email.slice(0, loc);
let e2 = email.slice(loc+1);
console.log(`이메일 : ${e1}, 도메인 : ${e2}`);

//split 이용
let res = email.split(" ");
res.forEach(item => {
    console.log(item);
})
let result = email.split("@");
console.log(`이메일 : ${result[0]}, 도메인 : ${result[1]}`);
*/

//-------- 표준 내장 객체 - 기본 객체 Array --------
//concat()
/*
let arr=[10,20,30];
let arr2 = new Array(100,200,300);
let newarr = arr.concat(arr2, ['t1','t2']);
console.log(arr); //[10, 20, 30]
console.log(newarr); //[10, 20, 30, 100, 200, 300, 't1', 't2']
*/

//find(), filter()
/*
let data = [10,50,100,30,40,50];
let result = data.filter(function(element, index){
    //return element === 50;
    return element >= 40;
})
console.log(result) //50
*/

//join()
/*
let arrName = ['hong', 'kim', 'lee'];
let result = arrName.join('/'); //구분
console.log(result); //hong/kim/lee
//['<li>aaaaa</li>', '<li>eeeee</li>'];
*/

//push()
/*
let arr = [];
arr.push("aaaa");
arr.push("bbb");
arr.push("ddd")
console.log(arr, arr.length); //['aaaa', 'bbb', 'ddd'] 3
*/

//forEach()
/* arr.forEach(item => console.log(item));
console.log(arr.length); */

//pop()
/* let d1 = arr.pop();
console.log(`delete elements ${d1}, all elements : ${arr}`); //delete elements ddd, all elements : aaaa,bbb
 */

//Q. 이름 화면에 출력 - forEach, map 사용해서
/* let irums = ['홍', '김', '이', '나', '박', '나'];
let list;
//forEach
document.getElementById('view_btn').addEventListener('click', function(){
    let element = '';
    irums.forEach(item => {
        element += `<li>${item}</li>`;
    });
    document.getElementById('result').innerHTML = element;
})

//map
document.getElementById('view_btn').addEventListener('click', function(){
    let result = irums.map(item => `<li>${item}</li>`); //자료 return
    console.log(result)
    document.getElementById('result').innerHTML = result.join('');
}) */

//----------------- 예외처리 -----------------
//try{} catch{} finally{}
/* try{
    console.log('test');
    console.log('test2');
    let arr = new Array(-1); //range error 개체 만든거 던짐
    console.log('test3'); //출력 안됨
} catch(e){
    console.log(e); //e로 받아옴
    console.log('ttt');
} finally{
    console.log('finally'); //정상적으로 동작하든 말든 finally 출력
} */

//toPrecision()
/* try{
    let arr = 10;
    let result = arr.toPrecision(200); //toPrecision() 메서드는 Number 객체를 지정된 정밀도로 나타내는 문자열을 반환한다.
    console.log(result);
} catch(e){
    console.log(e);
} finally{
    console.log('finally!!');
} */

//throw
/* let a = 20;
try{
    if(a>=20)
        console.log('a 는 20 이상');
    else if (a == 20)
        throw new Error("20과 동일"); //개체를 만들어서 던짐, 강력 에러
    else
        throw "20보다 작다";
} catch(e){
    console.log(e);
} finally{
    console.log('end!!!');
} */

//onclick : 이벤트
//addEventListener : 이벤트 외에도
document.getElementById('btn').addEventListener('click', function(){
    const elename = document.getElementById('name');
    const eleage = document.getElementById('age');
    let name = String(elename.value);

    //예외 처리
    try {
        let age = Number(eleage.value);
        if (Number.isNaN(age)) { //age : 문자형 숫자면 NaN
            throw new Error("숫자형 자료가 아님");
        }
        else {
            if (age < 0) {
                throw new Error ('0 보다 작습니다.');
            }
            else {
                console.log(`이름 : ${name.value}, 나이 : ${age.value}`);
            }
        }} catch(e) {
            console.log(e);
        } finally {
        console.log('done');
    }

    //초기화
    elename.value="";
    eleage.value="";

    let res = document.getElementById('result')
    res.innerHTML
})