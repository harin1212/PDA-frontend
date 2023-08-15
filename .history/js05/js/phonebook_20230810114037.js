"use strict"

/* const input = document.getElementById("myInput");
const listItems = document.querySelectorAll("#myul li");

input.addEventListener("input",function(){

    const filter = input.ariaValueMax.toLowerCase();

    listItems.forEach(item => {
        const name = item.textContent.toLowerCase();
        if(name.startsWith(filter)){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}) */

const input = document.getElementById("myInput");
const listItems = document.querySelectorAll("#myul li");

input.addEventListener("keyup", function(){
    const filter = input.value;
    listItems.forEach(item => {
        if(listItems == filter){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })

});


const searchfn = (e) => {
    e.preventDefault();
}
document.getElementById("myInput").addEventListener("input",)