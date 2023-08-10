document.getElementById('append')
.addEventListener('click', function(e){
    //console.log(e.target);
    e.preventDefault(); //서버 안올라감

    //엘리먼트 요소 추가
    let ele_li = document.createElement('li');
    //홍길동 값 받아서 자료 집어넣어야함
    let irum = document.getElementById('irum');
    let data = irum.value;

    let txt = document.createTextNode('')

    irum.value="";



});