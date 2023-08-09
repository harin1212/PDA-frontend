//----------------- DOM -----------------

/* document.getElementById('win_open').onclick = function(){
    //location.href="http://www.naver.com";
    document.write('hello');
} */

//----------------- HTML 태그 속성 -----------------
//html body
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

let lis = document.getElementById('li');
console.log(lis);