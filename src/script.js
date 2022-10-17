const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navham = document.getElementById("navham");
const navhamx = document.getElementById("navhamx");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("hidden");
  navham.classList.toggle("hidden");
  navhamx.classList.toggle("hidden");
});
