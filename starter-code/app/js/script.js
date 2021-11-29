const burgerBtn = document.querySelector(".burger-menu");
const menu = document.querySelector(".mobile-menu");
const homeCTA = document.querySelector(".home-cta");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

function toChange(c, o, men, over1, over2, body) {
  close.style.display = c;
  open.style.display = o;
  menu.style.right = men;
  overlay.style.opacity = over1;
  overlay.style.pointerEvents = over2;
  document.body.style.overflow = body;
}

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("opened");

  if (burgerBtn.classList.contains("opened")) {
    toChange("block", "none", "0", "1", "auto", "hidden");
  } else {
    toChange("none", "block", "-100%", "0", "none", "visible");
  }
});

overlay.addEventListener("click", (e) => {
  if (e.target.className === "overlay") {
    toChange("none", "block", "-100%", "0", "none", "visible");
    burgerBtn.classList.remove("opened");
  }
});

homeCTA.addEventListener("click", () => {
  window.open("./destination.html");
});
