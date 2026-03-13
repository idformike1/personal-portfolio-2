import gsap from 'gsap';

export const initReveals = () => {
    const revealElements = document.querySelectorAll('.reveal-text, .work-row');
    
    revealElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
};

export const initFooter = () => {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    gsap.from(footer, {
        scrollTrigger: {
            trigger: footer,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true
        },
        yPercent: -50,
        ease: 'none'
    });
};

export const initMagnetic = () => {
    const magneticElements = document.querySelectorAll('.magnetic');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const bound = this.getBoundingClientRect();
            const x = (e.clientX - bound.left) - (bound.width / 2);
            const y = (e.clientY - bound.top) - (bound.height / 2);
            
            gsap.to(this, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 1,
                ease: 'power3.out'
            });
        });

        el.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
};
