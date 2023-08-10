
//Q. 테이블 이름이나 나이 누르면 배경 노란색으로 바뀌게 하기
"use strict"
//let ele_td = document.getElementsByTagName('td');

//수정필요
/* for(let i=ele_td.length-1; i>=0; i--){
    ele_td[i].addEventListener('click', function(){
        // console.log(this);
        // console.log(this.parentElement);
        //this : 현재 객체 -> 부모 엘리먼트에 넘겨서 클래스 ㅂ잡아줌
        this.parentElement.classList.toggle('yellow');
    });
}; */


let ele_table = document.querySelector('table>tbody');
ele_table.addEventListener('click', function(e){
    e.target.parentElement.classList.toggle('yellow');
    // console.log(e.target);
});

