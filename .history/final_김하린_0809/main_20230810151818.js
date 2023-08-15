document.getElementById('btn')
.addEventListener('click', function(e){
    e.preventDefault(); //서버 안올라감

    //li 엘리먼트 요소 추가
    let ele_option = document.createElement('option');
    //input 값 받아서 자료 box1에 집어넣어야함
    //html에서 값 받기
    let addlist = document.getElementById('addlist');
    let data = addlist.value;
    //데이터 집어넣을 text node 생성
    let txt = document.createTextNode(data);
    //li랑 text node 연결시켜야함 -> 자식으로 추가 
    ele_option.appendChild(txt);

    //li : ul에 추가해야함
    let result = document.getElementById('box1');
    result.appendChild(ele_option);

    addlist.value=""; //초기화

});

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('btn');
    const moveRightButton = document.querySelector('.button button:nth-child(1)');
    const moveLeftButton = document.querySelector('.button button:nth-child(2)');
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    addButton.addEventListener('click', function(e) {
        e.preventDefault();

        const addlist = document.getElementById('addlist');
        const data = addlist.value;
        
        if (data) {
            const newOption = document.createElement('option');
            newOption.textContent = data;
            box1.appendChild(newOption);
            addlist.value = '';
        }
    });

    moveRightButton.addEventListener('click', function() {
        const selectedOptions = Array.from(box1.selectedOptions);
        selectedOptions.forEach(option => {
            box2.appendChild(option);
        });
    });

    moveLeftButton.addEventListener('click', function() {
        const selectedOptions = Array.from(box2.selectedOptions);
        selectedOptions.forEach(option => {
            box1.appendChild(option);
        });
    });
});
