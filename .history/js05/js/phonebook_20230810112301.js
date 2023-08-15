"use strict"

const input = document.getElementById("myInput");
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
})