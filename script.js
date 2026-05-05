// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Marquee Duplication for seamless infinite scroll
    const marquees = document.querySelectorAll('.marquee-content');
    marquees.forEach(marquee => {
        const clone = marquee.innerHTML;
        marquee.innerHTML += clone; // duplicate content
    });
});

window.scrollCarousel = function(id, dir) {
    const el = document.getElementById(id);
    if (el) {
        if (dir === 1 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (dir === -1 && el.scrollLeft <= 10) {
            el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
        } else {
            const scrollAmount = el.clientWidth * 0.8 * dir;
            el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
};
