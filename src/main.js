// Main Entry Point
import './styles/global.css';
import { initWorkGrid } from './components/workGrid';
import { initScroll } from './modules/scroll';
import { initLoader } from './modules/preloader';
import { initCursor } from './modules/cursor';
import { initMagnetic } from './modules/animations';

console.log('Dennis Snellenberg Portfolio Clone Initialized');

const initApp = async () => {
    // 1. Initialize Content
    await initWorkGrid();

    // 2. Initialize Scroll
    initScroll();

    // 3. Initialize Loader
    initLoader();

    // 4. Initialize Interactivity
    initCursor();
    initMagnetic();
};

document.addEventListener('DOMContentLoaded', initApp);
