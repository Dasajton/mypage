"use strict";

// -------- Function for Dropdown-Menu: --------
let menuOpen = false;

const dropDownMenu = document.querySelector(".dropdown-menu");
const burgerMenu = document.querySelector(".burgermenu");
const closeMenu = document.querySelector(".closemenu");

if (!menuOpen) {
  closeMenu.style.display = "none";
}

function toggleBurgerMenu() {
  menuOpen = !menuOpen;

  if (menuOpen) {
    dropDownMenu.classList.add("active");
  } else {
    dropDownMenu.classList.remove("active");
  }

  if (menuOpen) {
    burgerMenu.style.display = "none";
    closeMenu.style.display = "block";
    dropDownMenu.style.display = "flex";
  } else {
    burgerMenu.style.display = "block";
    closeMenu.style.display = "none";
    dropdownMenu.style.display = "flex";
  }
}
