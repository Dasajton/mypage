"use strict";
// -------- Function for Dark-Mode: --------

let darkModeOpen = false;

const switchColorTheme = document.getElementById("switch-color-theme");
const darkModeBtn = document.querySelector(".dark-mode-btn");
const lightModeBtn = document.querySelector(".light-mode-btn");

if (!darkModeOpen) {
  darkModeBtn.style.display = "none";
}

function toggleDarkMode() {
  darkModeOpen = !darkModeOpen;
  document.body.classList.toggle("dark-mode");

  if (darkModeOpen) {
    lightModeBtn.style.display = "none";
    darkModeBtn.style.display = "block";
  } else {
    lightModeBtn.style.display = "block";
    darkModeBtn.style.display = "none";
  }
}
