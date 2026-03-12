import './styles/global.css';
import { initWorkGrid } from './components/workGrid';
import { initScroll } from './modules/scroll';
import { initLoader } from './modules/preloader';
import { initCursor } from './modules/cursor';
import { initMagnetic } from './modules/animations';
import { initHoverPreview } from './modules/hoverPreview';
import { initMarquee } from './modules/marquee';

const initApp = async () => {
    try {
        console.log('Architectural Re-Initialization (Blueprint v2)...');
        
        // 1. Core Engine
        const lenis = initScroll();

        // 2. Content & Interactivity
        await initWorkGrid();
        initCursor();
        initHoverPreview();
        initMagnetic();
        initMarquee();

        // 3. Master Animation Timeline (Starting with Preloader)
        initLoader();

    } catch (error) {
        console.error('Critical initialization error:', error);
    }
};

document.addEventListener('DOMContentLoaded', initApp);
