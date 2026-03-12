import gsap from 'gsap';

export const initHoverPreview = () => {
    const tableRows = document.querySelectorAll('.work-row');
    const previewContainer = document.createElement('div');
    previewContainer.className = 'hover-preview-container';
    document.body.appendChild(previewContainer);

    // Style Container
    Object.assign(previewContainer.style, {
        position: 'fixed',
        width: '400px',
        height: '250px',
        pointerEvents: 'none',
        zIndex: 50,
        overflow: 'hidden',
        opacity: 0,
        transform: 'translate3d(-50%, -50%, 0) scale(0.8)',
        willChange: 'transform, opacity'
    });

    const xSetter = gsap.quickSetter(previewContainer, "x", "px");
    const ySetter = gsap.quickSetter(previewContainer, "y", "px");

    window.addEventListener('mousemove', e => {
        xSetter(e.clientX);
        ySetter(e.clientY);
    });

    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            const id = row.getAttribute('data-id');
            // Update image logic here if needed
            gsap.to(previewContainer, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: 'power3.out'
            });
        });

        row.addEventListener('mouseleave', () => {
            gsap.to(previewContainer, {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                ease: 'power3.in'
            });
        });
    });
};
