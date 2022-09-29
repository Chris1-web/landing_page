const mobileMenuBtn = document.querySelector(".mobile-menu");
const topDiv = document.querySelector(".top");
const middleDiv = document.querySelector(".middle");
const bottomDiv = document.querySelector(".bottom");

const navLinks = document.querySelector(".nav-links");
const ctaPhone = document.querySelector(".cta");
const overlay = document.querySelector(".overlay");

const showMobileNavLinks = function (child) {
  topDiv.classList[1] === "move"
    ? (child.style.display = "flex")
    : (child.style.display = "none");
};

mobileMenuBtn.addEventListener("click", () => {
  topDiv.classList.toggle("move");
  middleDiv.classList.toggle("move");
  bottomDiv.classList.toggle("move");
  overlay.classList.toggle("hide");
  navLinks.classList.toggle("open-nav");
  ctaPhone.classList.toggle("open-nav");
});
