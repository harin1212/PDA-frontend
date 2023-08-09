var images = ["image/image2.jpg", "image/image3.jpg", "image/image4.jpg"]; // 이미지 파일 목록
var currentImageIndex = 0; // 현재 표시 중인 이미지 인덱스

function changeImage() {
    var imageElement = document.getElementById("view");
    currentImageIndex = (currentImageIndex + 1) % images.length; // 다음 이미지 인덱스 계산
    imageElement.src = images[currentImageIndex]; // 이미지 소스 변경
    imageElement.alt = "Image " + (currentImageIndex + 1); // 이미지 설명 변경
}
