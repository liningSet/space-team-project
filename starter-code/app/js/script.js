const burgerBtn = document.querySelector(".burger-menu");
const menu = document.querySelector(".mobile-menu");
const homeCTA = document.querySelector(".home-cta");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("opened");

  if (burgerBtn.classList.contains("opened")) {
    close.style.display = "block";
    open.style.display = "none";
    menu.style.right = "0";
  } else {
    close.style.display = "none";
    open.style.display = "block";
    menu.style.right = "-100%";
  }
});

homeCTA.addEventListener("click", () => {
  window.open("./destination.html");
});
