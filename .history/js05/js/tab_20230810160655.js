
let ele = document.getElementsByClassName('tablist');

for(let i=0; i < ele.length; i++){
    ele[i].addEventListener('click', function(){
        this.classList.toggle('bgpanel');
        const panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = '';
        } else{
            panel.style.maxHeight = "10vh";
        }
    })
}