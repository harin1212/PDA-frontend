

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

});

//-------------- Enter 눌렀을 때 추가 --------------
/* let ele_ent = document.addlist;
ele_ent.addEventListener("keypress", function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('btn').click();
    };
}); */

//-------------- 오른쪽 이동 --------------
document.getElementById('rightbtn').addEventListener('click',function(){
    let selectedOptions = list1.selectedOptions;
    for(let option of selectedOptions){
        list1.removeChild(option);
        list2.appendChild(option);
    }
})
