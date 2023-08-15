"use strict"

/* const input = document.getElementById("myInput");
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

 */


const searchfn = (e) => {
    e.preventDefault(); //서버로 안넘어가게
    console.log(e.target.value);
    // let inputvalue = e.target.value;
}
document.getElementById("myInput").addEventListener("input",searchfn);