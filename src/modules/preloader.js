import gsap from 'gsap';

export const initLoader = () => {
    const tl = gsap.timeline();
    const words = document.querySelectorAll('.loading-words h2');
    
    tl.set('.loading-container', { display: 'flex' });
    tl.set(words, { opacity: 0, y: 20 });

    words.forEach((word, index) => {
        tl.to(word, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        tl.to(word, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.in',
            delay: 0.1
        });
    });

    tl.to('.loading-screen', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut'
    });

    tl.from('.name-h1', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    }, "-=0.4");

    tl.set('.loading-container', { display: 'none' });
};
