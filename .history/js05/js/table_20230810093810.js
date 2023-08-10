

let cells = document.getElementsByTagName('td');

cells.forEach(cell => {
    cell.addEventListener('click', function(){
        this.classList.toggle('yellow');
    });
});