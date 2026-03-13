import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
    console.log('Initializing ScrollAnimationController...');

    // 1. Reveal Text Animations
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out',
            skewY: 7
        });
    });

    // 2. Parallax Sections
    const parallaxImages = document.querySelectorAll('.parallax-img');
    parallaxImages.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            yPercent: 20,
            ease: 'none'
        });
    });

    // 3. Project Rows Reveal
    const workRows = document.querySelectorAll('.work-row');
    workRows.forEach((row, i) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: 'top 95%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
};
