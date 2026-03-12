import gsap from 'gsap';

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
