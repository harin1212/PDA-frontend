const buttons = document.querySelectorAll('.accodian');
const panels = document.querySelectorAll('.panel');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        panels.forEach(panel => {
            panel.style.display = 'none';
        });
        panels[index].style.display = 'block';
    });
});