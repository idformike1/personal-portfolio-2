import barba from '@barba/core';
import { initWorkGrid } from '../components/workGrid';
import { initMarquee } from './marquee';

export const initRouter = (lenis) => {
    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.5
                });
            },
            enter(data) {
                // Scroll to top on page change
                lenis.scrollTo(0, { immediate: true });
                
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5
                });
            }
        }],
        views: [
            {
                namespace: 'home',
                beforeEnter() {
                    initWorkGrid();
                    initMarquee();
                }
            },
            {
                namespace: 'work',
                beforeEnter() {
                    // Logic for work page
                    const container = document.querySelector('[data-barba="container"]');
                    container.innerHTML = '<h1>Work</h1><div id="work-list"></div>';
                    initWorkGrid();
                }
            },
            {
                namespace: 'about',
                beforeEnter() {
                    const container = document.querySelector('[data-barba="container"]');
                    container.innerHTML = '<h1>About</h1><p>Dennis Snellenberg is a freelance designer & developer.</p>';
                }
            },
            {
                namespace: 'contact',
                beforeEnter() {
                    const container = document.querySelector('[data-barba="container"]');
                    container.innerHTML = '<h1>Contact</h1><p>Let\'s work together.</p>';
                }
            }
        ]
    });

    // Update Lenis on transition
    barba.hooks.after(() => {
        lenis.resize();
    });
};
