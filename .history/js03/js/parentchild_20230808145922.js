
//------------ 클래스 상속 ------------
/*
class Man{
    constructor(irum, age){
        console.log('constructor');
        this._irum = irum; //_ 안쓰면 setter 호출함
        this._age = age;
    }
    //getter setter
    get irum(){
        console.log('getter irum')
        return this.irum;
    }
    set irum(irum){
        console.log('setter irum')
        return this._irum = irum;
    }
    get age(){
        console.log('getter age')
        return this.age;
    }
    set age(age){
        console.log('setter age')
        return this._age = age;
    }
}

let m1 = new Man('hong', 20); //생성자 호출
console.log(m1.age); //값 받아오는 순간에 getter가 동작함
*/

class P1{
    constructor(age){
        this._age = age;
    }
}
class C1 extends P1{
    constructor(irum, age){
        super(age); //P1에 age를 넘김
        this._irum = irum;
    }
}

const s1 = new C1('hong',20);
console.log(s1);
