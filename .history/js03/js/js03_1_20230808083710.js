const addcount=function(){
    let count=0;
    count++;
    return count;
}

document.getElementById('btn')
    .onclick=function(){
        document.getElementById('result')
        .innerHTML=addcount();
    }