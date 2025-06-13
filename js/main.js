// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Typing Animation
const typed = new Typed('#typed', {    strings: [
        'Web Developer',
        'Mobile App Developer',
        'Laravel Developer',
        'Flutter Developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// Lottie Animation
const animation = lottie.loadAnimation({
    container: document.getElementById('lottieAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json' // Developer animation
});

// Mobile Menu Toggle
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.opacity = '1';
    } else {
        scrollToTopButton.style.opacity = '0';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
