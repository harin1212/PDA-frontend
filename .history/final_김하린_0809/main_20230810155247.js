//-------------- 목록 추가 --------------


/* document.getElementById('btn')
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

}); */

//--------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('btn');
    const moveRightButton = document.querySelector('#rightbtn');
    const moveLeftButton = document.querySelector('#leftbtn');
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
