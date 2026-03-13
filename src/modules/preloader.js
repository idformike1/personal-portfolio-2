import gsap from 'gsap';

export const initLoader = () => {
    const tl = gsap.timeline({
        onComplete: () => {
            document.body.classList.remove('loading', 'antigravity-scroll-lock');
            document.documentElement.classList.remove('antigravity-scroll-lock');
            gsap.set('.loading-container', { display: 'none' });
        }
    });

    const words = document.querySelectorAll('.loading-words h2');
    
    // Initial State
    gsap.set(words, { opacity: 0, scale: 0.8 });
    gsap.set('.loading-screen', { yPercent: 0 });

    // 1. Language Sequence
    words.forEach((word, index) => {
        tl.to(word, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
        });
        tl.to(word, {
            opacity: 0,
            scale: 1.2,
            duration: 0.2,
            ease: 'power2.in',
            delay: 0.05
        });
    });

    // 2. Wipe Exit Animation
    tl.to('.loading-screen', {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut'
    }, '+=0.2');

    // 3. Curve Wrap effect (if elements exist)
    if (document.querySelector('.rounded-div-wrap.bottom')) {
        tl.to('.rounded-div-wrap.bottom', {
            height: '0vh',
            duration: 1.2,
            ease: 'power4.inOut'
        }, '<');
    }

    // 4. Master Reveal
    tl.from('.name-h1', {
        yPercent: 100,
        duration: 1.2,
        ease: 'power4.out'
    }, '-=0.4');

    tl.from('.hero-subtext p', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');

    tl.from('.nav-bar', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=1');

    return tl;
};
