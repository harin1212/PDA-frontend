//----------------- DOM -----------------

/* document.getElementById('win_open').onclick = function(){
    //location.href="http://www.naver.com";
    document.write('hello');
} */

//html body
let d = document.body;
console.log(d);
//html id값 받아오기
let list_id = document.getElementById('listId');
console.log(list_id);
//html class 값 받아오기
let li_class = document.getElementsByClassName('listClass');
console.log(li_class);

let tagname = document.getElementsByTagName('li');
console.log(tagname);