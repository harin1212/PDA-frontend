document.getElementById('append')
.addEventListener('click', function(e){
    //console.log(e.target);
    e.preventDefault(); //서버 안올라감

    //li 엘리먼트 요소 추가
    let ele_li = document.createElement('li');
    //홍길동 값 받아서 자료 집어넣어야함
    //html에서 값 받기
    let irum = document.getElementById('irum');
    let data = irum.value;
    //데이터 집어넣을 text node 생성
    let txt = document.createTextNode(data);
    //li랑 text node 연결시켜야함 -> 자식으로 추가 : appendchild
    ele_li.appendChild(txt);

    irum.value="";



});