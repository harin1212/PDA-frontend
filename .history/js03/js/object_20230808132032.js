

//--------------------- 객체 생성 ---------------------
//1. function() 생성자 함수
/*
const op = new Function("a", "b", "return a+b");

let result = op(10,20);
console.log('result',result);
*/

//2. Object 생성자 함수
/*
let person1 = new Object();
person1.name = "홍길동"; //속성 부여
person1.age = 20 ;
person1.addr = "서울";
//속성 출력
console.log(`name:${person1.name}, age:${person1.age}, addr:${person1.addr}`);
//메서드 만들고 객체 생성하여 출력
person1.prt = function(){ //메서드
    console.log('prt function!!!!');
}
console.log(person1); //객체 생성
//객체 타입 확인
console.log(typeof person1); //object (객체, 배열)
console.log(Array.isArray(person1)); //false
*/

//3. 생성자 함수
/*
function Man(irum, age){
    this.irum = irum; //this : 내 객체 자체에 접근할 수 있게 해줌
    this.age = age;
    //메서드 생성
    this.prt = function(){
        console.log(`name : ${this.irum}, age : ${this.age}`);
    }
}
//객체 생성
let p1 = new Man("hong", 20);
let p2 = new Man("park", 10);

//객체 출력
console.log(p1);
console.log(p2);
console.log(p1.irum, p1.age);
console.log('==============');
console.log(p2['irum'], p2['age']);
//메서드 호출
p2.prt();
*/

//4. 객체 리터럴
/*
const m1 = {irum:'hong', age:20, addr:'서울'};
const m2 = {irum:'park', age:10, addr:'경기'};
console.log(typeof m1, m1);
console.log(typeof m2, m2);
console.log(m1.irum, m1.age, m1.addr);
console.log(m2['irum'], m2['age'], m2['addr']);
*/

//5. 클래스
/*
class Student{
    //this로 바로 사용불가. 생성자 구현해야함. -> 메서드 안쓰고 속성에 대한 정보만
    constructor(studentId, irum, age){//생성자
        this.studentId = studentId;
        this.irum = irum;
        this.age = age;
    }
}
//객체 생성
let s1 = new Student(1, 'hong', 20);
let s2 = new Student(2, 'park', 10);

console.log(s1, typeof s1);
console.log(s2, typeof s2);

//============ 속성, 메서드 추가 ============
//속성 추가
s1.addr = '서울';
//메서드 추가
s1.sayHello = () => {
    console.log('안녕하세요');
}
//내용 확인
console.log(s1);

//============ 속성, 메서드 삭제 ============
//속성 삭제
delete s1.age;
//내용 확인
console.log(s1);

//============ 속성 적용 ============
//s1.nick1 nick2 = 'test'; //에러
s1['nick1 nick2'] = 'test';
console.log(s1);
//console.log(s1.nick1 nick2); //에러
console.log(s1['nick1 nick2']);

//============ 대괄호[]만 사용하는 경우 - 런타임시 결정되는 속성 ============
let a = 'age';
const user = {
    name : 'hong',
    [a] : 20
}
console.log(user);

//============ 반복문 for in ============
console.log('--- s1 객체 확인 ---');
console.log(s1);
for(let item in s1){
    //console.log(s1.item); //에러 s1.item : item이라는 속성 없음.
    console.log(item, s1[item]);
}
*/

//============ 프로토타입(prototype) ============
class Student{
    ConstructorFragment(irum, age){
        this.irum = irum;
        this.age = age;
    }
    prt = function(){
        console.log('prt method');
    }
}

let ins1 = new Student("a1", 20);
console.log(ins1);
console.dir(ins1);