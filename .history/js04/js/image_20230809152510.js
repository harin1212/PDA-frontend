/* var images = ["image/image2.jpg", "image/image3.jpg", "image/image4.jpg"]; // 이미지 파일 목록
var currentImageIndex = 0; // 현재 표시 중인 이미지 인덱스

function changeImage() {
    var imageElement = document.getElementById("view");
    imageElement.addEventListener("mouseover", changeImage);

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length; // 다음 이미지 인덱스 계산
        imageElement.src = images[currentImageIndex]; // 이미지 소스 변경
        imageElement.alt = "Image " + (currentImageIndex + 1); // 이미지 설명 변경
    }} */

//클래스로 이미지 받기
let layoutImgs = document.getElementsByClassName('layout');

//for문 : for, forEach, of
//of
for(let layoutImg of layoutImgs){
    layoutImg.addEventListener('mouseover', function(){
        for(let i = 0; i < layoutImgs.length; i++){
            layoutImgs[i].style.border='';
        }
        this.style.border = '3px solid red';
        let v = document.getElementById("view");
        console.log(sa)

    });
}
//for
/* for (let i = 0; i < layoutImg.length; i++) {
    layoutImg[i].addEventListener("click", changeImage);
} */
