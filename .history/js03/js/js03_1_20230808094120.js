
//--------------------------- 클로저 ---------------------------
/*
const addcount = (function(){
    let count=0;
    let fn=function(){
        count++;
        return count;
    };
    return fn;
})()

document.getElementById('btn')
    .onclick=function(){
        document.getElementById('result')
        .innerHTML=addcount();
    }
*/


const addcount = (function(){
    let count = 0;
    let fn = function (){
        count++;
        let eleirum = document.getElementById('irum');
        let irum = String(eleirum.value);
        let res = `${count}. ${irum}`;
        return res;
    };
    return fn;
})();

document.getElementById('btn').onclick = function(){
    let resultDiv = document.getElementById('result');
    let currentResult = resultDiv.innerHTML; // 기존 결과값 받아오기
    let newResult = addcount(); // addcount 함수로 새로운 결과값 생성
    resultDiv.innerHTML = currentResult + "<br>" + newResult; // 이전 결과값과 새 결과값 합쳐서 출력
    // irum 입력 필드 초기화
    document.getElementById('irum').value = '';
};


document.getElementById('btn')
    .onclick = function(){ //이벤트 발생시 함수로 동작 -> 이벤트 핸들러

}



//--------------------------- 객체 ---------------------------
