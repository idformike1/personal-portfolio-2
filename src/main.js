// Main Entry Point
import './styles/global.css';
import { initWorkGrid } from './components/workGrid';
import { initScroll } from './modules/scroll';
import { initLoader } from './modules/preloader';
import { initCursor } from './modules/cursor';
import { initMagnetic } from './modules/animations';

console.log('Dennis Snellenberg Portfolio Clone Initialized');

const initApp = async () => {
    try {
        console.log('Initializing Application...');
        
        // 1. Initialize Content
        await initWorkGrid().catch(err => console.warn('Work grid failed to load. Continuing...', err));

        // 2. Initialize Scroll
        initScroll();

        // 3. Initialize Loader
        initLoader();

        // 4. Initialize Interactivity
        initCursor();
        initMagnetic();
    } catch (error) {
        console.error('Critical initialization error:', error);
    }
};

document.addEventListener('DOMContentLoaded', initApp);
