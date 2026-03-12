import gsap from 'gsap';

export const initCursor = () => {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    const view = document.querySelector('.cursor-view');

    // State Mapping
    const states = {
        default: { scale: 1, opacity: 1, backgroundColor: 'white' },
        hover: { scale: 2.5, opacity: 1, backgroundColor: 'white' },
        preview: { scale: 4, opacity: 1, backgroundColor: 'var(--color-accent)' }
    };

    const xSetter = gsap.quickSetter(follower, "x", "px");
    const ySetter = gsap.quickSetter(follower, "y", "px");
    const dotXSetter = gsap.quickSetter(cursor, "x", "px");
    const dotYSetter = gsap.quickSetter(cursor, "y", "px");

    window.addEventListener('mousemove', e => {
        dotXSetter(e.clientX);
        dotYSetter(e.clientY);
        
        gsap.to({}, {
            duration: 0.1,
            onUpdate: () => {
                xSetter(e.clientX);
                ySetter(e.clientY);
            }
        });
    });

    // Controller Logic
    const updateState = (state) => {
        gsap.to(follower, {
            ...states[state],
            duration: 0.3,
            ease: 'power2.out'
        });
        
        if (state === 'preview') {
            gsap.to(view, { opacity: 1, scale: 1, duration: 0.2 });
        } else {
            gsap.to(view, { opacity: 0, scale: 0, duration: 0.2 });
        }
    };

    // Attach to elements
    document.querySelectorAll('.magnetic').forEach(el => {
        el.addEventListener('mouseenter', () => updateState('hover'));
        el.addEventListener('mouseleave', () => updateState('default'));
    });

    document.querySelectorAll('.work-row').forEach(el => {
        el.addEventListener('mouseenter', () => updateState('preview'));
        el.addEventListener('mouseleave', () => updateState('default'));
    });

    return { updateState };
};
