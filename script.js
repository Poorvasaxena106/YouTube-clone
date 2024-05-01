var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container1 = document.querySelector(".container1");

menuIcon.onclick = function(){
    sideBar.classList.toggle("large-sidebar");
    container1.classList.toggle("large-container");
}

// var sideBar = document.querySelector(".sidebar");
// sideBar.onmouseover = function(){
//     sideBar.classList.toggle("large-sidebar");
//     container1.classList.toggle("large-container");
// }

// ---------- Star Feedback-----------------------------

// const stars = document.querySelectorAll(".stars i");

// stars.forEach((star,index1)=>{
//     star.addEventListener("click",()=>{
//         console.log(index1);
//         stars.forEach((star,index2)=>{
//             console.log(index2);
//             if (index1 >= index2){
//                 star.classList.add("active");
//             }
//             else {
//                 star.classList.remove("active");
//             }
//         })
//     })
// })

// -------------------------------------------------


// search from search-bar------------------------------
function search_fav(){
    let input = document.getElementById('searchbar').value.toLowerCase();
    console.log(input);
    let x = document.getElementsByClassName('favs');
    for (let i = 0; i < x.length; i++) {
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "list-item";
        } 
        else {
            x[i].style.display = "none";
        }
    }
}

// add or remove element from search list (favourites)-------------
function removeFromList(){
    var element = document.getElementById("list");
    var list = document.querySelector(".favs");
    element.removeChild(element.lastChild);
}

function addToList(newText){
    var element = document.getElementById("list");
    var list = document.createElement("li");
    list.className = "favs";
    var i = document.createElement("i");
    i.className = "fa-solid fa-star";
    var text = document.createTextNode(newText);
    element.appendChild(list);
    list.appendChild(i);
    list.appendChild(text);
}

function toggle1(ball,tog,flag,newText){
    tog.onclick = function() {
        if(flag%2 == 0){
            ball.classList.toggle("call"); 
            addToList(newText);
        }
        else if(flag%2 != 0){
            ball.classList.remove("call"); 
            removeFromList();
        }
        flag+=1;
    }
}

toggle1(document.querySelector(".ball"),document.querySelector("#toggle"),0,"Video 1");
toggle1(document.querySelector(".ball2"),document.querySelector("#toggle2"),0,"Video 2");
toggle1(document.querySelector(".ball3"),document.querySelector("#toggle3"),0,"Video 3");
toggle1(document.querySelector(".ball4"),document.querySelector("#toggle4"),0,"Video 4");
toggle1(document.querySelector(".ball5"),document.querySelector("#toggle5"),0,"Video 5");
toggle1(document.querySelector(".ball6"),document.querySelector("#toggle6"),0,"Video 6");
toggle1(document.querySelector(".ball7"),document.querySelector("#toggle7"),0,"Video 7");
toggle1(document.querySelector(".ball8"),document.querySelector("#toggle8"),0,"Video 8");

// for profile-popup --------------------------------------------

const profilePopup = document.getElementById("collapseExa");
function closePopup() { 
    profilePopup.classList.remove("show"); 
}

function handlePopup(event) { 
    if (!profilePopup.contains(event.target)) {
         closePopup(); 
} } 

document.addEventListener("click", handlePopup);

document.getElementById("img1").addEventListener("click", () => {
    profilePopup.classList.toggle("show"); 
});


// for right-sidebar----------------------------------------

const sidebar = document.getElementById("collapseEx"); 
const togglerArea = document.getElementsByClassName("toggler");

function closeSidebar() { 
    sidebar.classList.remove("show"); 
} 

function handleClickOutside(event) { 
    if (!sidebar.contains(event.target)) {
         closeSidebar(); 
} } 

document.addEventListener("click", handleClickOutside); 

document.getElementById("right-menu-btn").addEventListener("click", () => {
     sidebar.classList.toggle("show"); 
});

// trigger animation when element appears-----------------------------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
  
      if (entry.isIntersecting) {
        square.classList.add('square-animation');
        return;
      }
  
      square.classList.remove('square-animation');
    });
});
  
observer.observe(document.querySelector('.animated-left-container'));










