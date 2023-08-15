const buttons = document.querySelectorAll('.accodian');
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
});