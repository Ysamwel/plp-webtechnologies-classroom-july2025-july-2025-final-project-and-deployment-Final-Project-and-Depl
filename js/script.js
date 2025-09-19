const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const navMenu = document.getElementById("nav-menu");

// Open menu
hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

// Close menu
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  closeBtn.style.display = "none";
  hamburger.style.display = "block";
});
