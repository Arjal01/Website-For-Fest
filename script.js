// Initialize Lucide icons
lucide.createIcons();

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate-scale')) {
                entry.target.animate([
                    { opacity: 0, transform: 'scale(0.5)' },
                    { opacity: 1, transform: 'scale(1)' }
                ], {
                    duration: 600,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            } else if (entry.target.classList.contains('animate-fade')) {
                entry.target.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], {
                    duration: 600,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            } else if (entry.target.classList.contains('animate-slide-up')) {
                entry.target.animate([
                    { opacity: 0, transform: 'translateY(20px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], {
                    duration: 600,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            } else if (entry.target.classList.contains('animate-slide-left')) {
                entry.target.animate([
                    { opacity: 0, transform: 'translateX(-20px)' },
                    { opacity: 1, transform: 'translateX(0)' }
                ], {
                    duration: 600,
                    delay: entry.target.dataset.delay || 0,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-scale, .animate-fade, .animate-slide-up, .animate-slide-left').forEach(el => {
    observer.observe(el);
});

// Add stagger delay to event cards
document.querySelectorAll('.event-card').forEach((card, index) => {
    card.dataset.delay = index * 100;
});

// Handle form submission
const form = document.querySelector('.register-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for registering! We will contact you soon.');
        form.reset();
    }
});


document.querySelector('.nav-logo').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});


// Function to detect if an element is in the viewport
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Add the animation class when the element is in view
document.addEventListener('scroll', function() {
    const h1Element = document.querySelector('.hero .hero-content h1');
    
    if (isInView(h1Element)) {
        h1Element.classList.add('animate-in-view');
    }
});

// glitch animation 
