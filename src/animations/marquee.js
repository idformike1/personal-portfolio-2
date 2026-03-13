import gsap from 'gsap';

export const initMarquee = () => {
    const marquee = document.querySelector('.name-h1');
    if (!marquee) return;

    // Horizontal drift based on scroll
    gsap.to(marquee, {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        xPercent: -50, // Moving left as we scroll down
        ease: 'none'
    });
};
