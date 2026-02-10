"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorFollower() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).tagName === "BUTTON") {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            <motion.svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    rotate: isHovering ? 45 : 0,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 150 }}
            >
                <circle
                    cx="16"
                    cy="16"
                    r="12"
                    className="fill-[#F0F0F0] stroke-[#3B82F6] stroke-1"
                    style={{ opacity: 0.8 }}
                />
                <motion.path
                    d="M16 4 L16 28 M4 16 L28 16"
                    stroke="#121212"
                    strokeWidth="1"
                    animate={{
                        opacity: isHovering ? 1 : 0,
                    }}
                />
            </motion.svg>
        </motion.div>
    );
}
