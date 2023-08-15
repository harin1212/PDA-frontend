

const buttons = document.querySelectorAll('.tablist');
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
});