var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container1 = document.querySelector(".container1")

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container1.classList.toggle("large-container")
}