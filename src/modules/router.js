import barba from '@barba/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { initWorkGrid } from '../components/workGrid';
import { initMarquee } from './marquee';
import { initMagnetic, initReveals, initFooter } from './animations';
import { initCursor } from './cursor';
import { initHoverPreview } from './hoverPreview';

export const initRouter = (lenis) => {
    // Helper to refresh all layout-dependent components
    const refreshComponents = async (namespace) => {
        if (namespace === 'home' || namespace === 'work') {
            await initWorkGrid();
        }
        initMarquee();
        initCursor();
        initHoverPreview();
        initMagnetic();
        initReveals();
        initFooter();
        
        lenis.resize();
        window.scrollTo(0, 0);
    };

    barba.init({
        debug: true,
        transitions: [{
            name: 'page-transition',
            async leave(data) {
                await gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                });
            },
            async enter(data) {
                lenis.scrollTo(0, { immediate: true });
                await refreshComponents(data.next.namespace);
                await gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                });
            }
        }],
        views: [
            { namespace: 'home' },
            { namespace: 'work' },
            { namespace: 'about' },
            { namespace: 'contact' }
        ]
    });

    barba.hooks.after(() => {
        lenis.start();
        ScrollTrigger.refresh();
    });
};
