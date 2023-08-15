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
//'ctrl + 옵션' 선택하면 여러개 선택 가능
rightButton.addEventListener('click', function () {
    let selectedOptions = Array.from(box1.selectedOptions);
    for (let right of selectedOptions) {
        box1.removeChild(right);
        box2.appendChild(right);
    }
});

//-------------- <<= 왼쪽 옵션 이동 --------------
//'ctrl + 옵션' 선택하면 여러개 선택 가능
leftButton.addEventListener('click', function () {
    let selectedOptions = Array.from(box2.selectedOptions);
    for (let left of selectedOptions) {
        box2.removeChild(left);
        box1.appendChild(left);
    }
});