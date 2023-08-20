// applies to the menuLink/dropdownLogo elements on the page
// allows dropdown menu to work for mobile devices
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
