'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.scss';

export default function Hero() {
    const background = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top top",
                end: "bottom top"
            }
        });

        timeline.to(background.current, {y: 200}, 0);
    }, []);

    return (
        <div ref={container} className={styles.hero}>
            <div ref={background} className={styles.background}>
                <Image 
                    src="/images/hero_portrait.png"
                    fill={true}
                    alt="Hero Portrait"
                    priority={true}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.copy}>
                    <p>Independent</p>
                    <p>Designer & Developer</p>
                </div>
            </div>
        </div>
    );
}
