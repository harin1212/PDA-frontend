
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
        return count;
    };
    return fn;
})(); //즉시호출 -> 함수 자체 동작

document.getElementById('btn').onclick = function(){
    document.getElementById('result')
        .innerHTML = addcount();
}