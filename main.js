//Function to toggle the bar
function menuBarList() {
    var x = document.getElementById("menu-bar");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

//Function to toggle the menu icon to cancel icon
function myFunction(x) {
    x.classList.toggle("fa-xmark")
}

// initializing the slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // to initialize on-scroll animations

new WOW().init();