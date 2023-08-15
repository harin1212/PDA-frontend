

//-------------- 목록 추가 --------------
document.getElementById('btn')
.addEventListener('click', function(e){
    e.preventDefault(); //서버 안올라가게 하기
    let ele_option = document.createElement('option');
    let addlist = document.getElementById('addlist');
    let data = addlist.value;
    let txt = document.createTextNode(data);
    ele_option.appendChild(txt);

    let result = document.getElementById('box1');
    result.appendChild(ele_option);
    addlist.value=""; //초기화
});

//-------------- Enter 눌렀을 때 추가 --------------
let ele_ent = document.addlist;
ele_ent.addEventListener("keypress", function(e){
    if (e.key == 'Enter' || e.key == 13) {
        e.preventDefault();
        document.getElementById('btn').click();
    };
});