
//표준 내장 객체
//내 코드
/*
document.getElementById('sum').onclick = function(){
    let num1 = document.getElementById('su1');
    let su1 = Number(num1.value);
    let num2 = document.getElementById('su2');
    let su2 = Number(num2.value);

    let sum = (su1 + su2);
    document.getElementById('result')
    .innerHTML = '결과 : ' + sum;
}
*/
//강사님 코드

document.getElementById('sum').addEventListener('click', function(){ //콜백함수
    //외부에서 입력받는건 문자 => 숫자로 변환 해줘야함
    let result = Number(document.getElementById('su1').value) + Number(document.getElementById('su2').value)
    console.log(result);
    su1.value="";
    su2.value="";
})


/*
let su1 = Number('10');
let data = su1.toString();
console.log(typeof su1, su1);
console.log(typeof data, data);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Date);
*/

//----------- 기본 객체 Date -----------
/*
//객체 생성
let today = new Date();
//메소드 동작
let date = today.getDate();
let y = today.getFullYear();
let m = today.getMonth()+1;
let d = today.getDate();
let h = today.getHours();
let min = today.getMinutes();
let s = today.getSeconds();

let result = `${y}.${m}.${d}. ${h}:${min}:${s}`;
console.log(result);
*/