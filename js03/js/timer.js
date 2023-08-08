

document.getElementById('timer').onclick = function(){
        a = setInterval(() => {
            let today = new Date();
            let date = today.getDate();
            let y = today.getFullYear();
            let m = today.getMonth()+1;
            let d = today.getDate();
            let h = today.getHours();
            let min = today.getMinutes();
            let s = today.getSeconds();
            let result = `${y}.${m}.${d}. ${h}:${min}:${s}`;
            document.getElementById('result').innerHTML = result;
            console.log(result);
        }, 1000);
}

document.getElementById('stop').onclick = function(){
    clearInterval(a);
}