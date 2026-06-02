const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = image.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});