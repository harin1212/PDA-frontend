//----------------- DOM -----------------

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
let elered = document.getElementsByClassName('red'); //가변적

//sol 1. i--
/* for (let i = 0; i < elered.length; i++){
    elered[i].className = 'green'; // -> lenth길이 바뀌므로 menu2는 색 안바뀜
    i--; //solution
} */

//sol 2.
for (let i = elered.length-1, i>=0; i--) {
    elered[i].className='green'

}

console.log(elered);