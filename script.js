const photos = document.querySelectorAll(".photo");

function toggleOpen() {
  this.classList.toggle("open");
}

photos.forEach((photo) => {
  photo.addEventListener("click", toggleOpen);
});
