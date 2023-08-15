//-------------- 목록 추가 --------------
let addlist = document.getElementById('addlist');
let data = addlist.value;

document.getElementById('btn')
.addEventListener('click', function(e){
    e.preventDefault(); //서버 안올라감
    let ele_option = document.createElement('option');
    let txt = document.createTextNode(data);
    ele_option.appendChild(txt);

    let result = document.getElementById('box1');
    result.appendChild(ele_option);
    addlist.value=""; //초기화

});
/* 
document.getElementById('rightbtn')
.addEventListener('click', function(e){
    e.preventDefault();
    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    let addlist = document.getElementById('addlist');
    let data = addlist.value;
    if (data) {
        const newOption = document.createElement('option');
        newOption.textContent = data;
        box1.appendChild(newOption);
        addlist.value = '';
    }

}); */
/* document.addEventListener('DOMContentLoaded', function() {




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
 */