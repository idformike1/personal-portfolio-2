import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';

import { initScroll } from './runtime/scroll';
import { initLoader } from './runtime/preloader';
import { initCursor } from './controllers/cursorController';
import { initHoverPreview } from './controllers/hoverPreviewController';
import { initScrollAnimations } from './controllers/scrollAnimationController';
import { initRouter } from './controllers/pageTransitionController';
import { initMagnetic } from './animations/animations';
import { initMarquee } from './animations/marquee';

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Deterministic Reconstruction Pipeline: Initializing...');

        // Layer 1: Runtime Engine
        const lenis = initScroll();
        
        // Layer 2: Controllers
        initCursor();
        initHoverPreview();
        initScrollAnimations();
        initMagnetic();
        initMarquee();
        
        // Layer 3: Routing & Transitions
        initRouter();

        // Layer 4: Animation Sequencing
        initLoader();
        
    } catch (error) {
        console.error('Critical initialization error:', error);
    }
});
