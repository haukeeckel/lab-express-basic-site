const galleries = document.querySelectorAll(".gallery");
const modal = document.querySelector(".modal");

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

galleries.forEach((gallery) => {
  gallery.addEventListener("click", () => {
    modal.style.display = "block";
    imgGallery = gallery.querySelector("img").src;
    img = modal.querySelector("img");
    img.src = imgGallery;
  });
});
