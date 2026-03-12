import barba from '@barba/core';
import gsap from 'gsap';
import { initWorkGrid } from '../components/workGrid';
import { initMarquee } from './marquee';

export const initRouter = (lenis) => {
    barba.init({
        transitions: [{
            name: 'default-transition',
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
                    console.log('Router: Entering Home');
                    initWorkGrid();
                    initMarquee();
                }
            },
            {
                namespace: 'work',
                beforeEnter() {
                    console.log('Router: Entering Work');
                    initWorkGrid();
                }
            },
            {
                namespace: 'about',
                beforeEnter() {
                    console.log('Router: Entering About');
                }
            },
            {
                namespace: 'contact',
                beforeEnter() {
                    console.log('Router: Entering Contact');
                }
            }
        ]
    });

    barba.hooks.after(() => {
        lenis.resize();
        // Re-initialize any global interactions if needed
    });
};
