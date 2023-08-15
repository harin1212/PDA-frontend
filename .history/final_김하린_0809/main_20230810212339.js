//-------------- 목록 추가 --------------


document.getElementById('btn')
.addEventListener('click', function(e){
    e.preventDefault(); //서버 안올라감
    let ele_option = document.createElement('option');
    let addlist = document.getElementById('addlist');
    let data = addlist.value;
    let txt = document.createTextNode(data);
    ele_option.appendChild(txt);

    let result = document.getElementById('box1');
    result.appendChild(ele_option);
    addlist.value=""; //초기화
});
