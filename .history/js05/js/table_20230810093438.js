

let cells = document.querySelectorAll('.clickable');

cells.forEach(cell => {
    cell.addEventListener('click', function(){
        this.classList.toggle('yellow');
    });
});