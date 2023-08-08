
//표준 내장 객체
document.getElementById('sum').onclick = function(){
    let num1 = document.getElementById('su1');
    let su1 = Number(num1.value);
    let num2 = document.getElementById('su2');
    let su2 = Number(num2.value);

    let sum = (su1 + su2);
    document.getElementById('result')
    .innerHTML = '결과 : ' + sum;
}

document.getElementById('sum').addEventListener('click', function(){ //콜백함수
    let num1 = document.getElementById('su1');
    let num2 = document.getElementById('su2');
    //외부에서 입력받는건 문자임. 따라서 숫자로 변환 해줘야함
    let result = Number(num1.value) + Number(num2.value)
    console.log(result);
    su1.value="";
    su2.value="";

})//