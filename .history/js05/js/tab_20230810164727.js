
//망한 내코드
/* const buttons = document.querySelectorAll('.tablist');
const panels = document.querySelectorAll('.tabpanel');
const clickCounts = new Array(buttons.length).fill(0);

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        clickCounts[index]++;
        if (clickCounts[index] % 3 === 1) {
            panels[index].style.display = 'block';
            panels[index].classList.contains('bgpanel');
        } else {
            panels[index].style.display = 'none';
        }
    });
}); */

const mytabs = document.querySelectorAll('.tabItem');
const tabpanel = document.querySelectorAll('.tabpanel');

const init = function(){
    let initli = mytabs[0].firstElementChild;
    let initA = initli.parentElement.getAttribute('aria-controls');
    initli.classList.add('bgpanel');

    initli.focus();
    let initId = document.getElementById(initA);
    initId.classList.add('visit');
}
init();

mytabs.forEach(item => {
    item.firstChild.addEventListener('focus', function(e){
        e.preventDefault();
        for(let i=0; i < mytabl)
        //focus에 있는 이벤트에만 add만 해주면 됨.
    //나머지는 삭제해야함. active에대한 정보만 삭제.
    //for문으로 add정보들 remove 해야함
    });
})