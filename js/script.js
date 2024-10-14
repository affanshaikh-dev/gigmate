let header = document.querySelector(".header");
let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
    header.classList.toggle("active");
})

let btnsNavigations = document.querySelector(".btnsNavigations");
let searchBtn = document.querySelector(".search");
let input = document.querySelector(".inputContainer input");

searchBtn.addEventListener("click", () => {
    btnsNavigations.classList.toggle("show");
    if (header.classList.contains("active")) {
        header.classList.remove("active");
    } else {
        input.value = "";
    }
})

