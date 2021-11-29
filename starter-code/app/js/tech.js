const circles = document.querySelectorAll(".nav-circle");
const techs = document.querySelectorAll(".tech");

circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    techs.forEach((tech) => {
      tech;
      if (tech.classList.contains(e.target.dataset.show)) {
        tech.style.display = "flex";
      } else {
        tech.style.display = "none";
      }
    });
  });
});
