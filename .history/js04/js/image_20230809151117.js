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
/* let layoutImg = document.getElementsByClassName('layout');
console.log(layoutImg); */

var images = document.querySelectorAll(".layout"); // 이미지 요소 목록
images.forEach(image => image.addEventListener("click", changeImage));

function changeImage(event) {
    var clickedImage = event.target;
    var nextImageSrc = clickedImage.getAttribute("data-next"); // 다음 이미지의 소스 가져오기
    clickedImage.src = nextImageSrc; // 이미지 소스 변경
}