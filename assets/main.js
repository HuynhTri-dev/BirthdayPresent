$(document).ready(function () {
  // mo qua
  $("#present-top").click(function (e) {
    const presentTop = document.getElementById("present-top");
    presentTop.style.animation = "open 2s forwards ease-in";
    for (var i = 0; i < 20; i++) {
      createBalloon();
    }

    const getPresent = document.getElementById("get-present");
    setTimeout(function () {
      getPresent.style.display = "block";
    }, 2500);
  });

  $("#get-present").click(function (e) {
    window.location.href = "wish-cake.html";
  });

  $("#get-back").click(function (e) {
    window.location.href = "present.html";
  });

  // thap nen
  $("#start").click(function () {
    // Choi nhac
    var audio = $("#birthday-song")[0];
    // audio.play();

    // Thap nen
    const cake = document.getElementsByClassName("cake-wrap");
    const flame = document.createElement("div");
    flame.classList.add("flame");
    cake[0].appendChild(flame);

    // xuat hien the huong dan
    const theWish = document.getElementById("the-wish");
    theWish.style.display = "flex";

    // Tha bong
    for (var i = 0; i < 10; i++) {
      createBalloon();
    }
    setTimeout(function () {
      for (var i = 0; i < 20; i++) {
        createBalloon();
      }
    }, 2000);
  });

  // thoi nen
  $("#blow").click(function (e) {
    const theWish = document.getElementById("the-wish");
    theWish.style.display = "none";
    const become = document.getElementById("wish-become-true");
    become.style.display = "flex";

    const flame = document.getElementsByClassName("flame");
    flame[0].classList.remove("flame");
  });
});

function createBalloon() {
  const container = document.getElementById("balloons-container");
  const balloon = document.createElement("div");
  const tria = document.createElement("div");
  tria.classList.add("triangle");
  balloon.classList.add("balloon");

  // Tạo màu ngẫu nhiên cho bóng bay
  const randomColor = getRandomColor();
  balloon.style.backgroundColor = randomColor;

  // Tạo vị trí ngẫu nhiên cho quả bóng
  const leftPosition = (Math.random() * 0.95 + 0.05) * container.clientWidth;
  const animationDelay = Math.random() * 2 + "s"; // Delay ngẫu nhiên cho mỗi quả bóng

  balloon.style.left = leftPosition + "px";
  balloon.style.animationDelay = animationDelay;

  //   Tao mau cho tam giac
  tria.style.borderBottom = "20px solid" + randomColor;

  // Thêm bóng bay vào container
  balloon.appendChild(tria);
  container.appendChild(balloon);

  // Sau một thời gian, loại bỏ bóng bay
  setTimeout(() => {
    balloon.remove();
  }, 5000); // Bóng bay sẽ biến mất sau 5 giây
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
