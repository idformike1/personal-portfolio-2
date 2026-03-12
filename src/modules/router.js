import barba from '@barba/core';
import gsap from 'gsap';
import { initWorkGrid } from '../components/workGrid';
import { initMarquee } from './marquee';

export const initRouter = (lenis) => {
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
                await gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                });
            }
        }],
        views: [
            {
                namespace: 'home',
                beforeEnter() {
                    console.log('Barba: Entering Home');
                    initWorkGrid();
                    initMarquee();
                }
            },
            {
                namespace: 'work',
                beforeEnter() {
                    console.log('Barba: Entering Work');
                    initWorkGrid();
                }
            },
            {
                namespace: 'about',
                beforeEnter() {
                    console.log('Barba: Entering About');
                }
            },
            {
                namespace: 'contact',
                beforeEnter() {
                    console.log('Barba: Entering Contact');
                }
            }
        ]
    });

    barba.hooks.before(() => {
        // Stop Lenis during transition if needed
        lenis.stop();
    });

    barba.hooks.after(() => {
        lenis.start();
        lenis.resize();
        window.scrollTo(0, 0);
    });
};
