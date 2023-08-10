
//Q. 테이블 이름이나 나이 누르면 배경 노란색으로 바뀌게 하기
"use strict"
let cells = document.getElementsByTagName('td');

/* [...cells].forEach(item => {
    item.addEventListener('click', function(){
        this.classList.toggle('yellow');
    });
}); */

for(let i=cells.length; i>=0; i++){
    cells[i].addEventListener('click', function(){
        console.log(this);
    })
}