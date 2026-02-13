'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ShootingStarEffect = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const createStar = (x: number, y: number) => {
            const star = document.createElement('div');
            star.className = 'absolute w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]';

            // Set initial position
            gsap.set(star, { x, y, opacity: 1, scale: 1 });

            container.appendChild(star);

            // Randomize movement slightly
            const angle = Math.random() * Math.PI * 2;
            const velocity = 20 + Math.random() * 30; // Speed
            const dx = Math.cos(angle) * velocity;
            const dy = Math.sin(angle) * velocity;

            // Animate
            gsap.to(star, {
                x: x + dx, // Move in direction of velocity
                y: y + dy, // Move in direction of velocity
                opacity: 0,
                scale: 0,
                duration: 0.5 + Math.random() * 0.5, // Random duration between 0.5 and 1s
                ease: 'power1.out',
                onComplete: () => {
                    if (container.contains(star)) {
                        container.removeChild(star);
                    }
                },
            });
        };

        let lastTime = 0;
        const throttleDelay = 20; // ms

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastTime > throttleDelay) {
                createStar(e.clientX, e.clientY);
                lastTime = now;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            // Clean up any remaining stars? Not strictly necessary as they remove themselves, but good practice if unmounting
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]"
            aria-hidden="true"
        />
    );
};

export default ShootingStarEffect;
