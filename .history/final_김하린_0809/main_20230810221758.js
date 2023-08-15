let addButton = document.getElementById('btn');
let addListInput = document.getElementById('addlist');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let rightButton = document.getElementById('rightbtn');
let leftButton = document.getElementById('leftbtn');

//-------------- 목록 추가 --------------
addButton.addEventListener('click', function (e) {
    e.preventDefault();
    let data = addListInput.value;
    if (data !== '') { // 입력값이 비어있지 않을 경우에만 처리
        let option = document.createElement('option');
        option.textContent = data;
        box1.appendChild(option); //box1에 생성
        addListInput.value = ''; // 입력 필드 초기화
    }
});

//-------------- Enter 눌렀을 때 추가 --------------
addListInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addButton.click(); // 추가 버튼 클릭 이벤트 발생
    }
});

//-------------- 더블클릭시 삭제 --------------
function doubleClickToDelete(box) {
    box.addEventListener("dblclick", function (e) {
        let selOption = box.options[box.selectedIndex];
        if (selOption) {
            box.removeChild(selOption);
        }
    });
}
doubleClickToDelete(box1);
doubleClickToDelete(box2);

//-------------- =>> 오른쪽 옵션 이동 --------------
rightButton.addEventListener('click', function () {
    let selectedbox1 = Array.from(box1.selectedbox1);
    for (let option of selectedbox1) {
        box1.removeChild(option);
        box2.appendChild(option);
    }
});

//-------------- <<= 왼쪽 옵션 이동 --------------
leftButton.addEventListener('click', function () {
    let selectedbox2 = Array.from(box2.selectedbox2);
    for (let option of selectedbox2) {
        box2.removeChild(option);
        box1.appendChild(option);
    }
});)