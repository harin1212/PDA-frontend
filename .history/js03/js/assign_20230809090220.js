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

console.log('-------------------------------')
let [a,b,c] = [1,2];
console.log(a,b,c); //1 2 undefined

let [t1=10, t2=10, t3=10] = [1, 2];
console.log(t1,t2,t3); //1 2 10

let[x,,y] = ['test1', 'test2', 'test3', 'test4']
console.log(x,y); //test1 test3

let[k1,...k2] = ['test1', 'test2', 'test3', 'test4']
console.log(k1); //test1
console.log(k2); //['test2', 'test3', 'test4']
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

//객체 배열
//배열에 객체를 추가하기
/*
let arr = [];
let arr2 = new Array(3);

console.log(typeof arr);
console.log(typeof arr2);
console.log(Array.isArray(arr))
console.log(Array.isArray(arr2))
*/
/*
let len;
let arr = [];
len = arr.push("a1");
console.log(`len: ${len}, arr: ${arr}`);

len = arr.push("a2");
console.log(`len: ${len}, arr: ${arr}`);
*/


//Q.이름 나이 추가하고 전체보기하면 전체 목록 보여주는 코드
//내 코드
//array를 전역변수로 설정!!!!
let arrname = [];
let arrage = [];
let len;
document.getElementById('add').onclick = (function(){
    let fn = function(){
        let elename = document.getElementById('name');
        let eleage = document.getElementById('age');
        len = arrname.push(String(elename.value));
        len = arrage.push(Number(eleage.value));
        console.log(`${len}. 이름 : ${arrname} 나이: ${arrage}`);
        return len, arrname, arrage
    };
    return fn;
})()

document.getElementById('all').onclick = function(){
    let res = document.getElementById('result')
    res.innerHTML += `<li> ${len}, 이름 : ${arrname[len]}, 나이 : ${arrage[len]}</li>`;
}


//강사님 코드
/*
let arr = [];
document.getElementById('add').onclick = function(){
    let elename = document.getElementById('name');
    let eleage = document.getElementById('age');
    let name = String(elename.value);
    let age = Number(eleage.value);
    len = {name:name, age:age};
    len = arr.push(name, age);

    console.log(`${len}. 이름 : ${arrname} 나이: ${arrage}`);
}

document.getElementById('all').onclick = function(){
    let liList = arrinfo.map((item) => `<li> name : ${item.name}, age:${item.age}</li>`)
    document.getElementById('result').innerHTML = liList;
}

let arrinfo=[];

document.getElementById('add')
.addEventListener('click', function(){

  let txtname=document.getElementById('name');
  let txtage=document.getElementById('age');
  let irum=txtname.value;
  let age=Number(txtage.value);

  let info={name:name, age:age};
  arrinfo.push(info);

  console.log(arrinfo);

  txtname='';
  txtage='';
});

document.getElementById('all').onclick=function()
{
let liList=
arrinfo
  .map((item)=>`<li>irum :${item.name}, age:${item.age}</li>`);

  console.log(liList);
   document.getElementById('result').innerHTML=liList;
}
*/