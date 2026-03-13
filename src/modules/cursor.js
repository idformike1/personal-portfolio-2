import gsap from 'gsap';

export const initCursor = () => {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    const view = document.querySelector('.cursor-view');

    if (!cursor || !follower) return { updateState: () => {} };

    // Set Initial
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const xSetter = gsap.quickSetter(follower, "x", "px");
    const ySetter = gsap.quickSetter(follower, "y", "px");
    const dotXSetter = gsap.quickSetter(cursor, "x", "px");
    const dotYSetter = gsap.quickSetter(cursor, "y", "px");

    window.addEventListener('mousemove', e => {
        dotXSetter(e.clientX);
        dotYSetter(e.clientY);
        
        // Follower has more delay for liquid feel
        gsap.to({}, {
            duration: 0.15,
            onUpdate: () => {
                xSetter(e.clientX);
                ySetter(e.clientY);
            }
        });
    });

    const updateState = (state) => {
        const tl = gsap.timeline({ overwrite: true });
        
        if (state === 'hover') {
            tl.to(follower, {
                scale: 3,
                duration: 0.3,
                ease: 'power3.out',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.5)'
            });
        } else if (state === 'preview') {
            tl.to(follower, {
                scale: 6,
                duration: 0.4,
                ease: 'back.out(1.7)',
                backgroundColor: 'var(--color-accent)',
                border: 'none'
            });
            tl.to(view, { opacity: 1, scale: 1, duration: 0.2 }, '<');
        } else {
            tl.to(follower, {
                scale: 1,
                duration: 0.3,
                ease: 'power3.out',
                backgroundColor: 'white',
                border: 'none'
            });
            tl.to(view, { opacity: 0, scale: 0, duration: 0.2 }, '<');
        }
    };

    // Attach delegated listeners to main container for SPA stability
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.magnetic, .work-row, .btn');
        if (!target) return;

        if (target.classList.contains('work-row')) {
            updateState('preview');
        } else {
            updateState('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.magnetic, .work-row, .btn');
        if (target) updateState('default');
    });

    return { updateState };
};
