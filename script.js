document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        let currentIndex = 0;
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const slideCounter = slider.querySelector('.slide-counter');

        // Update slide counter text
        function updateSlideCounter() {
            slideCounter.textContent = `${currentIndex + 1}/${totalSlides}`;
        }

        // Move to next slide
        function showNextSlide() {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlides();
            updateSlideCounter();
        }

        // Update the slide position
        function updateSlides() {
            const slidesContainer = slider.querySelector('.slides');
            const slideWidth = slides[0].clientWidth;
            slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        // Add event listener to slider container for next slide
        slider.addEventListener('click', () => {
            showNextSlide();
        });

        // Initialize slide counter
        updateSlideCounter();
    });
});