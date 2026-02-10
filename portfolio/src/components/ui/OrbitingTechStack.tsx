"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    FileJson,
    Code2,
    Server,
    Gem,
    Globe,
    FileType,
    Box,
    Atom,
    Wind
} from "lucide-react";

const techStack = [
    { icon: <FileJson className="w-5 h-5 md:w-6 md:h-6" />, name: "JavaScript", radius: "140px", speed: 20 },
    { icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />, name: "Python", radius: "180px", speed: 25 },
    { icon: <Server className="w-5 h-5 md:w-6 md:h-6" />, name: "Node JS", radius: "220px", speed: 30 },
    { icon: <Gem className="w-5 h-5 md:w-6 md:h-6" />, name: "Ruby", radius: "260px", speed: 35 },
    { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, name: "Next JS", radius: "160px", speed: 22 },
    { icon: <FileType className="w-5 h-5 md:w-6 md:h-6" />, name: "TypeScript", radius: "200px", speed: 28 },
    { icon: <Box className="w-5 h-5 md:w-6 md:h-6" />, name: "Visual Basic", radius: "240px", speed: 32 },
    { icon: <Atom className="w-5 h-5 md:w-6 md:h-6" />, name: "React", radius: "120px", speed: 18 },
    { icon: <Wind className="w-5 h-5 md:w-6 md:h-6" />, name: "Tailwind", radius: "100px", speed: 15 },
];

export function OrbitingTechStack() {
    return (
        <div className="relative flex items-center justify-center w-full max-w-[600px] h-[600px]">
            {/* Central "Sun" Profile Image */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-accent-blue/40 overflow-hidden bg-charcoal-light shadow-[0_0_60px_rgba(59,130,246,0.4)]"
            >
                <Image
                    src="/profile.jpg"
                    alt="Paul Prince"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 192px"
                    priority
                />
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Orbit Rings (Decorative) */}
            {[100, 140, 180, 220, 260].map((radius) => (
                <div
                    key={radius}
                    className="absolute border border-white/5 rounded-full pointer-events-none"
                    style={{ width: radius * 2, height: radius * 2 }}
                />
            ))}

            {/* Orbiting Tech Planets */}
            {techStack.map((tech, index) => (
                <motion.div
                    key={tech.name}
                    className="absolute z-10"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: tech.speed,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        width: `calc(${tech.radius} * 2)`,
                        height: `calc(${tech.radius} * 2)`,
                    }}
                >
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-accent-blue/20 bg-charcoal-dark/90 text-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:border-accent-blue hover:text-white transition-all cursor-pointer group"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: tech.speed,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <div className="relative">
                            {tech.icon}
                            {/* Tooltip */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal-light px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap border border-white/5">
                                {tech.name}
                            </div>
                        </div>

                        {/* Small planet glow */}
                        <div className="absolute inset-0 bg-accent-blue/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                </motion.div>
            ))}

            {/* Background Solar Flare */}
            <div className="absolute w-full h-full bg-neo-deco-glow opacity-20 animate-pulse pointer-events-none" />
        </div>
    );
}
