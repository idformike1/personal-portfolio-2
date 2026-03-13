import gsap from 'gsap';

export const initHoverPreview = () => {
    let previewContainer = document.querySelector('.hover-preview-container');
    
    if (!previewContainer) {
        previewContainer = document.createElement('div');
        previewContainer.className = 'hover-preview-container';
        document.body.appendChild(previewContainer);
        
        // Initial Styles for the Bubble
        Object.assign(previewContainer.style, {
            position: 'fixed',
            width: '400px',
            height: '280px',
            pointerEvents: 'none',
            zIndex: 40,
            overflow: 'hidden',
            borderRadius: '10px',
            opacity: 0,
            scale: 0,
            top: 0,
            left: 0,
            willChange: 'transform, opacity'
        });
    }

    const xSetter = gsap.quickSetter(previewContainer, "x", "px");
    const ySetter = gsap.quickSetter(previewContainer, "y", "px");

    window.addEventListener('mousemove', e => {
        // Offset to center the bubble and add some "liquid" lag
        gsap.to({}, {
            duration: 0.2,
            onUpdate: () => {
                xSetter(e.clientX - 200);
                ySetter(e.clientY - 140);
            }
        });
    });

    document.addEventListener('mouseover', e => {
        const row = e.target.closest('.work-row');
        if (!row) return;

        let imgUrl = row.getAttribute('data-img');
        if (imgUrl) {
            // Ensure absolute path
            if (!imgUrl.startsWith('/')) imgUrl = '/' + imgUrl;
            
            console.log('HoverPreview: Loading image', imgUrl);
            previewContainer.style.backgroundImage = `url(${imgUrl})`;
            previewContainer.style.backgroundSize = 'cover';
            previewContainer.style.backgroundPosition = 'center';
            
            gsap.to(previewContainer, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'power3.out'
            });
        }
    });

    document.addEventListener('mouseout', e => {
        if (e.target.closest('.work-row')) {
            gsap.to(previewContainer, {
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
                ease: 'power3.in'
            });
        }
    });
};
