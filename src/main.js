import './styles/global.css';
import { initWorkGrid } from './components/workGrid';
import { initScroll } from './modules/scroll';
import { initLoader } from './modules/preloader';
import { initCursor } from './modules/cursor';
import { initMagnetic } from './modules/animations';
import { initHoverPreview } from './modules/hoverPreview';
import { initMarquee } from './modules/marquee';
import { initRouter } from './modules/router';

const initApp = async () => {
    try {
        console.log('Architectural Re-Initialization (Blueprint v3)...');
        
        // 1. Core Engine
        const lenis = initScroll();

        // 2. Routing & Content
        initRouter(lenis);
        
        // Initial manual trigger for first load
        await initWorkGrid();
        initCursor();
        initHoverPreview();
        initMagnetic();
        initMarquee();

        // 3. Master Animation Timeline
        initLoader();

    } catch (error) {
        console.error('Critical initialization error:', error);
    }
};

document.addEventListener('DOMContentLoaded', initApp);
