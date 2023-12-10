// button About
var buttonAbout = document.getElementById("buttonAbout");
function newpage(buttonAbout){
    window.location.href = "about us-sq.html"
}

//button Gallery
var buttonGallery = document.getElementById("buttonGallery");
function newwindow(buttonGallery){
    window.location.href = "gallery-sq.html"
}

//button Services

var servicesButton = document.getElementById("servicesButton");
function newwindowopen(servicesButton){
    window.location.href = "services-sq.html"
}

// back to top
var backTop = document.getElementById("back-to-top");
    window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        backTop.style.visibility = "visible";
    } else {
        backTop.style.visibility = "hidden";
    }
}

backTop.onclick = function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// scrolling in banner

let headbannertext = document.getElementById("headbanner-text");

let banner = document.getElementById("home-head-banner");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    headbannertext.style.marginTop =  value * 1.5 + "px";
    banner.style.overflow = "hidden";
})

ScrollReveal({
    reset: true,
    distance: "20px",
    duration: 1500,
    delay: 200,
    origin: "left"
});

ScrollReveal().reveal('.contactText');