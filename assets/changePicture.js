$(document).ready(function () {
  // Danh sách các ảnh trong album
  const photos = [
    "./assets/img/1.jpg",
    "./assets/img/2.jpg",
    "./assets/img/3.jpg",
    "./assets/img/4.jpg",
    "./assets/img/5.jpg",
    "./assets/img/6.jpg",
    "./assets/img/7.jpg",
    "./assets/img/10.jpg",
    "./assets/img/12.jpg",
    "./assets/img/13.jpg",
    "./assets/img/14.jpg",
    "./assets/img/15.jpg",
    "./assets/img/16.jpg",
  ];

  // Lấy phần tử HTML
  const photoElement = document.getElementById("album-img");
  const prevButton = document.getElementById("left");
  const nextButton = document.getElementById("right");

  // Biến chỉ mục ảnh hiện tại
  let currentIndex = 0;

  setInterval(function () {
    updatePhoto();
    currentIndex += 1;
    if (currentIndex == 13) {
      currentIndex = 0;
    }
  }, 2000);

  // Hàm cập nhật ảnh
  function updatePhoto() {
    photoElement.src = photos[currentIndex];
    photoElement.alt = `Photo ${currentIndex + 1}`;
  }

  // Xử lý sự kiện khi bấm nút "Trước"
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updatePhoto();
  });

  // Xử lý sự kiện khi bấm nút "Tiếp"
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePhoto();
  });

  const video = document.getElementById("myVideo");

  // Tạo Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play(); // Phát video khi nó xuất hiện trong khung nhìn
      } else {
        video.pause(); // Dừng video khi ra khỏi khung nhìn
      }
    });
  });

  // Gắn video vào Observer
  observer.observe(video);
});
