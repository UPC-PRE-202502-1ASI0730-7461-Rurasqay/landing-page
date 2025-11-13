const modal = document.getElementById("videoModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const video = document.getElementById("videoPlayer");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
  video.play(); 
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
});
