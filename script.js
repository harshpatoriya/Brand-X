let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  console.log("Menu clicked");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  console.log("Window scrolled");
  navbar.classList.remove("active");
};
