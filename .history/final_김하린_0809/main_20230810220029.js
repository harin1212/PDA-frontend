let addButton = document.getElementById('btn');
let addListInput = document.getElementById('addlist');
let box = document.getElementById('box');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');

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

box.addEventListener("dblclick", function(item){
        let selectedOptions = selectid.option[selectid.selectedIndex];
        if(selectedOptions){

        }
    })
}

/*
//-------------- 목록 추가 --------------
document.getElementById('btn')
.addEventListener('click', function(e){
    e.preventDefault(); //서버 안올라가게 하기
    //input 받아오기
    let data = document.getElementById('addlist').value;
    let txt = document.createTextNode(data);

    //option 생성
    let ele_option = document.createElement('option');
    ele_option.appendChild(txt);

    //box1에 출력
    let result = document.getElementById('box1');
    result.appendChild(ele_option);
    document.getElementById('addlist')=""; //초기화
});

//-------------- Enter 눌렀을 때 추가 --------------
let ele_ent = document.data;
ele_ent.addEventListener("keypress", function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('btn').click();
    };
});

//-------------- 오른쪽 이동 --------------
document.getElementById('rightbtn').addEventListener('click',function(){
    let selectedOptions = list1.selectedOptions;
    for(let option of selectedOptions){
        list1.removeChild(option);
        list2.appendChild(option);
    }
})
 */