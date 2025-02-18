document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".slider-item");
  const dots = document.querySelectorAll(".slider-nav span");
  const leftBtn = document.getElementById("left-btn");
  const rightBtn = document.getElementById("right-btn");
  let currentIndex = 0;
  let timer = null; // 用于自动播放的定时器

  function showSlide(index) {
    // 处理索引范围
    if (index < 0) {
      index = items.length - 1;
    } else if (index >= items.length) {
      index = 0;
    }

    currentIndex = index;

    items.forEach((item) => item.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    items[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // 开始自动播放
  function startAutoPlay() {
    timer = setInterval(nextSlide, 3000);
  }

  // 停止自动播放
  function stopAutoPlay() {
    clearInterval(timer);
  }

  // 点击左右按钮切换幻灯片
  leftBtn.addEventListener("click", () => {
    stopAutoPlay(); // 点击时停止自动播放
    prevSlide();
    startAutoPlay(); // 重新开始自动播放
  });

  rightBtn.addEventListener("click", () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
  });

  // 点击小圆点切换幻灯片
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoPlay();
      showSlide(index);
      startAutoPlay();
    });
  });

  // 鼠标悬停在轮播图上时停止自动播放
  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);

  // 开始自动播放
  startAutoPlay();
});
