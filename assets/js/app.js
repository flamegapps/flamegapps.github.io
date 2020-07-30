// Toggling a class

const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("expanded");
});
