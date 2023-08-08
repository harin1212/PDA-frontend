
//표준 내장 객체
let a = '10';

document.getElementById('sum').onclick = function(){
    let num1 = document.getElementById('su1');
    let su1 = Number(num1.value);
    let num2 = document.getElementById('su2');
    let su2 = Number(num2.value);

    let sum = (su1 + su2);
    let result =  sum;
    document.getElementById('result')
    .innerHTML = '결과 : ' + result;
}