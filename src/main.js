import './styles/global.css';
import { initWorkGrid } from './components/workGrid';
import { initScroll } from './modules/scroll';
import { initLoader } from './modules/preloader';
import { initCursor } from './modules/cursor';
import { initMagnetic, initReveals, initFooter } from './modules/animations';
import { initHoverPreview } from './modules/hoverPreview';
import { initMarquee } from './modules/marquee';
import { initRouter } from './modules/router';

const initApp = async () => {
    try {
        console.log('Architectural Re-Initialization (Blueprint v4.7)...');
        
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
        initReveals();
        initFooter();

        // 3. Master Animation Timeline (Starting with Preloader)
        const loader = initLoader();
        
        // Ensure reveal even if namespaces differ (Blueprint v4.3)
        loader.play();

    } catch (error) {
        console.error('Critical initialization error:', error);
    }
};

document.addEventListener('DOMContentLoaded', initApp);
