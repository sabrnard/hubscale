let myBurger = document.querySelector(".burger");
let myNav = document.querySelector("nav.main");

myBurger.addEventListener("click", function () {
    myBurger.classList.toggle("active");
    myNav.classList.toggle("active");
});