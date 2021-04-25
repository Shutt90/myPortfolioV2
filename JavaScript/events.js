const hamEl = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");

hamEl.addEventListener("click", function () {
  navLinks.classList.toggle("hidden");
});
