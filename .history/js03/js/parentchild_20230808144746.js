
//------------ 클래스 상속 ------------
class Man{
    constructor(irum, age){
        console.log('constructor');
        this.irum = irum;
        this.age = age;
    }
    //getter setter
    get irum(){
        console.log('getter irum')
        return this.irum;
    }
    set irum(irum){
        console.log('setter irum')
        return this.irum;
    }
    get age(){
        console.log('getter age')
        return this.age;
    }
    set age(age){
        console.log('setter age')
        return this.age;
    }
}

let m1 = new Man('hong', 20); //생성자 호출


