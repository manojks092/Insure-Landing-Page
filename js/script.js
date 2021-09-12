const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
//   for the toggle im using the name disclose
  menu.classList.toggle("disclose");
});
