let currentIndex = 0;
let images = [];
let totalImages = 0;

function updateCarousel() {
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Auto-rotate
setInterval(nextImage, 3000);