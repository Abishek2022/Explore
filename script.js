let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling Down - Hide Navbar
    navbar.style.transform = "translateY(-100%) ";
  } else {
    // Scrolling Up - Show Navbar
    navbar.style.transform = "translateY(0)";
  }
  
  lastScrollTop = scrollTop;
});