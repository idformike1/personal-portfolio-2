import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScroll = () => {
    console.log('Initializing Lenis...', Lenis);
    const lenis = new Lenis({
        autoRaf: true, // Let Lenis handle its own RAF if needed, or keep manual
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Optional: Connect to ScrollTrigger if needed for specific triggers
    // But for Lenis, we usually just need the RAF sync.

    return lenis;
};
