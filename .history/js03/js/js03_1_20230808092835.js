
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
        let res = document.getElementById('irum');
        let irum = String(res.value);
        return res;
    };
    return fn;
})(); //즉시호출 -> 함수 자체 동작에 대한 결과

document.getElementById('irum').onclick = function(){ //버튼 클릭
    document.getElementById('result') //result에 결과값 받아옴
        .innerHTML = addcount(); //addcount 함수 받아옴(count 증가)
    document.getElementById()
}

//--------------------------- 객체 ---------------------------
