document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dots = document.querySelectorAll('.slider-dot');
    let current = 0;
    let interval = null;

    function showSlide(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === current);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });
    }

    function nextSlide() {
        showSlide(current + 1);
    }

    function prevSlide() {
        showSlide(current - 1);
    }

    function startAutoPlay() {
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    nextBtn?.addEventListener('click', function () {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    prevBtn?.addEventListener('click', function () {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            showSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    showSlide(0);
    startAutoPlay();
});
