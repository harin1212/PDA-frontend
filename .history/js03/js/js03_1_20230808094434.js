
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
    let count=0;
    let fn = function (){
        count++;
        let eleirum = document.getElementById('irum');
        let irum = String(eleirum.value);
        let res = `${count} ${irum}`
        return res;
    };
    return fn;
})(); //즉시호출 -> 함수 자체 동작에 대한 결과

document.getElementById('btn').onclick = function(){ //버튼 클릭
    let resultDiv = document.getElementById('result') //result에 결과값 받아옴
    resultDiv.innerHTML += addcount(); //addcount 함수 받아옴(count 증가)
    document.getElementById();
}


document.getElementById('btn')
    .onclick = function(){ //이벤트 발생시 함수로 동작 -> 이벤트 핸들러
        let txt

}



//--------------------------- 객체 ---------------------------
