"use strict";

// -------- Function for Dropdown-Menu: --------

let menuOpen = false;

const dropDownMenu = document.querySelector(".dropdown-menu");
const burgerMenu = document.querySelector(".burgermenu");
const closeMenu = document.querySelector(".closemenu");
const overlay = document.getElementById("overlay");

if (!menuOpen) {
  closeMenu.style.display = "none";
}

function toggleBurgerMenu() {
  menuOpen = !menuOpen;

  if (menuOpen) {
    dropDownMenu.classList.add("active");
    overlay.style.display = "block";
  } else {
    dropDownMenu.classList.remove("active");
    overlay.style.display = "none";
  }

  if (menuOpen) {
    burgerMenu.style.display = "none";
    closeMenu.style.display = "block";
    dropDownMenu.style.display = "flex";
  } else {
    burgerMenu.style.display = "block";
    closeMenu.style.display = "none";
    dropDownMenu.style.display = "flex";
  }
}
