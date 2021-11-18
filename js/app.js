const navBar = document.querySelector(".header__2");
let loginForm = document.querySelector(".login");
let loginIcon = document.querySelector("#login-btn");
let xButton = document.querySelector("#close");

const fixMenu = () => {
    if(window.scrollY > 80) {
        navBar.classList.add("active");
    } else {
        navBar.classList.remove("active");
    }
}

window.addEventListener("scroll", fixMenu);
window.addEventListener("load", fixMenu);

const showLogin = () => {
    loginForm.classList.toggle("active");
}

loginIcon.addEventListener("click", showLogin);

const closeLogin = () => {
    loginForm.classList.remove("active");
}

xButton.addEventListener("click", closeLogin);

function initMap() {
    var location = {lat: 47.663452 , lng: 26.273230};
    var map = new google.maps.Map(document.querySelector("#map"), {
        zoom: 4,
        center: location
    });
}

