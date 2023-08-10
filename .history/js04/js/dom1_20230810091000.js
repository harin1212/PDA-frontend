//----------------- DOM -----------------

//const { default: next } = require("next/types");

/* document.getElementById('win_open').onclick = function(){
    //location.href="http://www.naver.com";
    document.write('hello');
} */

//----------------- HTML 태그 속성 -----------------
/* //html body
let d = document.body;
console.log(d);
//html id값 받아오기
let list_id = document.getElementById('listId');
console.log(list_id);
//html class 값 받아오기
let li_class = document.getElementsByClassName('listClass');
console.log(li_class);
//tag 값 받아오기 ex.li
let tagname = document.getElementsByTagName('li');
console.log(tagname);

let names = document.getElementsByName('listName');
console.log(names);

let child1 = document.body.children;
console.log(child1);
//li 3번째 받아오기
//let lis = document.getElementsByTagName('li')[2].textContent;
//let lis = document.getElementsC('li')[2].className;
//let lis = document.getElementsC('li')[2].tagName;
console.log(lis); */

//----------------- menu -----------------
//querySelectorAll('.class') == getElementByClassName('class')
//let elered = document.querySelectorAll('.red'); //정적
/* let elered = document.getElementsByClassName('red'); //가변적 -> 인덱스 재조정

//sol 1. i--
for (let i = 0; i < elered.length; i++){
    elered[i].className = 'green'; // -> lenth길이 바뀌므로 menu2는 색 안바뀜
    i--; //solution
}

//sol 2. for 조건 바꾸기
for (let i = elered.length-1; i>=0; i--) {
    elered[i].className='green'
}

//sol 3. spread 사용
[...elered].forEach(item => item.className = 'green');
 */
//sol 4. querySelectorAll 사용
/* document.querySelectorAll('.red')
.forEach(item => item.className = 'green');
 */

//------------------ Node search - child --------------------------
//children : 자식중 element type 요소만 반환
//first Child, lastChild, nextElementSibiling, previousElementSibling
//hasChildNodes

/* const ul_ele = document.getElementsByTagName('ul')[0];
console.log(ul_ele.children); //모든 자식 요소 찾기
console.log(ul_ele.hasChildNodes()); //함수
console.log(ul_ele.firstElementChild); //가장 먼저 사용하는 거
console.log(ul_ele.lastElementChild);

let ele_m3 = document.getElementById('m3');
let next_ele_m3 = ele_m3.nextElementSibling; //다음 형제
console.log(next_ele_m3);
next_ele_m3.style.backgroundColor = 'yellow'; //다음 형제 배경 yellow로
ele_m3.previousElementSibling.style.color = 'red'; //이전 형제 글씨 red로 */

//------------------ 클래스 속성 값 변경 하거나 얻어오기 --------------------------
//className : class attribute 값을 변경하거나 얻어올 때
//classList

//className
/* let cName = document.getElementById('m2');
console.log(cName.className);
cName.className = 'green'; //변경 하는 것

ele_li.forEach(item => {
    if(item.className == 'red')
        item.className = 'green';
}) */

//classList
let ele_li = document.querySelectorAll('li'); //정적 -> forEach 가능
ele_li.forEach(item => {
    if(item.classList.contains('red'))
        item.classList.replace('red','green');
})

document.getElementById('aaa').innerHTML = "<p>hello</p>";