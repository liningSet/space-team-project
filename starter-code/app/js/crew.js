const bullets = document.querySelectorAll(".nav-bullet");
const members = document.querySelectorAll(".member");

bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    members.forEach((member) => {
      if (member.classList.contains(e.target.dataset.show)) {
        member.style.display = "flex";
      } else {
        member.style.display = "none";
      }
    });
  });
});
