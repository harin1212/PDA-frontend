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
    // console.log(e.target.value); //input에서 입력하면 값 콘솔로 잘 넘어감
    let inputvalue = e.target.value;
    let element_li = document.getElementsByTagName('li'); //li 값 받아오기
    [...element_li].forEach(item => { //줄마다의 li 받아오기
        // console.log(item);
        let ele_a = item.getElementsByTagName('a')[0]; //a의 0번째
        let a_content = ele_a.textContent; //text content 받아옴
        console.log(a_content);
    });
}
document.getElementById("myInput").addEventListener("input",searchfn);