"use strict"

/* const buttons = document.querySelectorAll('.accodian');
const panels = document.querySelectorAll('.panel');
const clickCounts = new Array(buttons.length).fill(0);

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        clickCounts[index]++;
        if (clickCounts[index] % 2 === 1) {
            panels[index].style.display = 'block';
        } else {
            panels[index].style.display = 'none';
        }
    });
}); */

let acc = document.getElementsByClassName('accodian');

for(let i=0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        const panel = this.nextElementSibling; //다음 자료. 돔구조 확인
        if(panel.style.maxHeight){
            panel.style.maxHeight = '';
        } else{
            panel.style.maxHeight = "10vh";
        }
    });
}