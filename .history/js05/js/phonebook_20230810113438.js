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
console.log(listItems[0]);

input.addEventListener("keyup", function(){
    const filter = input.value;
    listItems.forEach(item => {
        if(listItems[0] == filter){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })

});