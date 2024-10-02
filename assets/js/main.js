const images = document.querySelectorAll(".slideshow img"); 
let currentIndex = 0;
let timer;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function startSlideshow() {
    if (!timer) {
        timer = setInterval(nextImage, 2000);
    }
}

function stopSlideshow() {
    clearInterval(timer);
    timer = null; 
}

document.getElementById("nextButton").addEventListener("click", nextImage);
document.getElementById("prevButton").addEventListener("click", prevImage);
document.getElementById("startButton").addEventListener("click", startSlideshow);
document.getElementById("stopButton").addEventListener("click", stopSlideshow);
