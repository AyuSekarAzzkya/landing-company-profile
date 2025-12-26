AOS.init({
    duration: 1200,
    once: false,
    mirror: true 
});

const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(follower, { x: e.clientX - 17, y: e.clientY - 17, duration: 0.2 });
});

const interactiveElements = document.querySelectorAll('a, button, .image-hover-zoom, .hamburger');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(follower, {
            scale: 2.5,
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: 'rgba(255,255,255,0.8)',
            duration: 0.3
        });
        gsap.to(cursor, { scale: 0, duration: 0.2 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(follower, {
            scale: 1,
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,0.4)',
            duration: 0.3
        });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
    });
});

const burgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            gsap.from(".menu-link", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                delay: 0.3
            });
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.glass-header');
    if (window.scrollY > 50) {
        header.style.padding = '15px 40px'; 
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.padding = '24px 40px';
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});
