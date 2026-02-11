"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    SiJavascript,
    SiPython,
    SiNodedotjs,
    SiRuby,
    SiNextdotjs,
    SiTypescript,
    SiReact,
    SiTailwindcss
} from "react-icons/si";

const techStack = [
    { icon: <SiJavascript className="w-5 h-5 md:w-6 md:h-6" />, name: "JavaScript", radius: 300, speed: 20, color: "#F7DF1E" },
    { icon: <SiPython className="w-5 h-5 md:w-6 md:h-6" />, name: "Python", radius: 340, speed: 25, color: "#3776AB" },
    { icon: <SiNodedotjs className="w-5 h-5 md:w-6 md:h-6" />, name: "Node JS", radius: 380, speed: 30, color: "#339933" },
    { icon: <SiRuby className="w-5 h-5 md:w-6 md:h-6" />, name: "Ruby", radius: 420, speed: 35, color: "#CC342D" },
    { icon: <SiNextdotjs className="w-5 h-5 md:w-6 md:h-6" />, name: "Next JS", radius: 320, speed: 22, color: "#FFFFFF" },
    { icon: <SiTypescript className="w-5 h-5 md:w-6 md:h-6" />, name: "TypeScript", radius: 360, speed: 28, color: "#3178C6" },
    { icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />, name: "React", radius: 280, speed: 18, color: "#61DAFB" },
    { icon: <SiTailwindcss className="w-5 h-5 md:w-6 md:h-6" />, name: "Tailwind", radius: 260, speed: 15, color: "#06B6D4" },
];

export function OrbitingTechStack() {
    const [isCenterHovered, setIsCenterHovered] = useState(false);
    const [isAnyPlanetHovered, setIsAnyPlanetHovered] = useState(false);

    return (
        <div className="relative flex items-center justify-center w-full max-w-[1200px] h-[700px] md:h-[1000px]">
            {/* Inline styles for the rotation animation and pause state */}
            <style>{`
                @keyframes orbit-rotation {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes counter-rotation {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                .orbit-planet {
                    animation: orbit-rotation var(--duration) linear infinite;
                }
                .orbit-planet-icon {
                    animation: counter-rotation var(--duration) linear infinite;
                }
                .paused {
                    animation-play-state: paused !important;
                }
            `}</style>
            {/* Central "Sun" Profile Image (Explicitly using the new profile1.jpg) */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                onMouseEnter={() => setIsCenterHovered(true)}
                onMouseLeave={() => setIsCenterHovered(false)}
                className="relative z-20 w-64 h-64 md:w-[500px] md:h-[500px] rounded-full border-4 border-accent-blue/40 overflow-hidden bg-charcoal-light shadow-[0_0_100px_rgba(59,130,246,0.6)] group cursor-pointer"
            >
                <motion.div
                    className="w-full h-full relative"
                    whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
                    initial={{ filter: "grayscale(100%)" }}
                >
                    <Image
                        src="/profile.jpg"
                        alt="Paul Prince"
                        fill
                        className="object-cover transition-all duration-700"
                        sizes="(max-width: 768px) 256px, 500px"
                        priority
                    />
                </motion.div>
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>

            {/* Orbit Rings (Decorative - Scaled for the 500px central Sun) */}
            {[280, 340, 400, 460, 520].map((radius) => (
                <motion.div
                    key={radius}
                    className="absolute border border-white/5 rounded-full pointer-events-none"
                    animate={{
                        width: (radius + (isCenterHovered ? 40 : 0)) * 2,
                        height: (radius + (isCenterHovered ? 40 : 0)) * 2
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
            ))}

            {/* Orbiting Tech Planets */}
            {techStack.map((tech, index) => (
                <motion.div
                    key={tech.name}
                    className={`absolute top-1/2 left-1/2 orbit-planet pointer-events-none ${isAnyPlanetHovered ? 'paused' : ''}`}
                    style={{
                        zIndex: 10,
                        '--duration': `${tech.speed}s`
                    } as any}
                    whileHover={{ zIndex: 50 }}
                    animate={{
                        width: (tech.radius + (isCenterHovered ? 60 : 0)) * 2,
                        height: (tech.radius + (isCenterHovered ? 60 : 0)) * 2
                    }}
                    transition={{
                        width: { type: "spring", stiffness: 80, damping: 15 },
                        height: { type: "spring", stiffness: 80, damping: 15 }
                    }}
                >
                    <motion.div
                        className={`absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-charcoal-dark/95 shadow-xl cursor-pointer group pointer-events-auto orbit-planet-icon ${isAnyPlanetHovered ? 'paused' : ''}`}
                        style={{
                            color: tech.color,
                            '--duration': `${tech.speed}s`
                        } as any}
                        onMouseEnter={() => setIsAnyPlanetHovered(true)}
                        onMouseLeave={() => setIsAnyPlanetHovered(false)}
                        whileHover={{ scale: 1.2 }}
                        transition={{
                            scale: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                    >
                        <div className="relative flex items-center justify-center pointer-events-none">
                            {tech.icon}

                            {/* Improved Tooltip */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-charcoal-dark/90 text-white px-3 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap border border-white/10 shadow-2xl backdrop-blur-sm pointer-events-none">
                                <span style={{ color: tech.color }} className="mr-1.5">•</span>
                                {tech.name}
                            </div>
                        </div>

                        {/* Planet glow in theme color */}
                        <div
                            className="absolute inset-0 rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity pointer-events-none"
                            style={{ backgroundColor: tech.color }}
                        />
                    </motion.div>
                </motion.div>
            ))}

            {/* Background Solar Flare */}
            <div className="absolute w-full h-full bg-neo-deco-glow opacity-20 animate-pulse pointer-events-none" />
        </div>
    );
}
