// Common Navigation Scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
});

// Any other common logic
console.log("Symposium 2026 Loaded");
