const planetBtns = document.querySelectorAll(".planet-btn");
const planets = document.querySelectorAll(".planet");

planetBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let planetToShow = e.target.dataset.show;

    planets.forEach((planet) => {
      if (planet.classList.contains(planetToShow)) {
        planet.style.display = "flex";
      } else {
        planet.style.display = "none";
      }
    });
  });
});
