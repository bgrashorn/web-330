/**
 =========================================================
 ; Title: theme.js
 ; Author: Brett Grashorn
 ; Date: 5 January 2023
 ; Description: JavaScript code for Assignment 1.
 ; Sources:  Web 330 HTML, CSS, and JavaScript Requirements 
 ;          document
 ;          Assign_1 document
  ========================================================
 */

//   Makes Light Theme the default if not already set
function setDefaultTheme() {
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

// Sets the body to user selected theme.
function setSelectedTheme() {
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}