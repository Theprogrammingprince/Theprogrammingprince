"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MorphingText } from "@/components/ui/morphing-text";
import { OrbitingTechStack } from "../ui/OrbitingTechStack";
import { MagneticButton } from "../ui/MagneticButton";
import { Download, ArrowRight } from "lucide-react";

const hellos = [
    "Hello", "Bonjour", "Hola", "Ciao", "Olá", "Hallo", "Konnichiwa"
];

const roles = [
    "FULLSTACK DEVELOPER",
    "UI/UX SPECIALIST",
    "CREATIVE ENGINEER",
    "SYSTEM ARCHITECT"
];

export function Hero() {
    const [helloIndex, setHelloIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHelloIndex((prev) => (prev + 1) % hellos.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background pt-20 px-6">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0 bg-neo-deco-glow opacity-30" />

            <div className="relative z-10 flex flex-col items-center max-w-7xl w-full">
                {/* Multilingual Greeting */}
                <motion.div
                    key={helloIndex}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 font-mono text-accent-gold tracking-[0.5em] text-xs uppercase"
                >
                    {hellos[helloIndex]}
                </motion.div>

                {/* Overlapping Content Container */}
                <div className="relative w-full flex flex-col items-center justify-center">

                    {/* Text Layer (Behind) */}
                    <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none opacity-20 md:opacity-40 select-none">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            className="text-[11vw] font-heading font-black text-white/20 tracking-tighter whitespace-nowrap leading-none uppercase"
                        >
                            PAUL PRINCE
                        </motion.h1>
                    </div>

                    {/* Core Content Layer (Middle) */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-12 py-12">

                        {/* Left Info */}
                        <div className="flex-1 text-center lg:text-left z-20">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl md:text-2xl font-sans text-cloud/80 mb-2 font-medium"
                            >
                                Hey, I am
                            </motion.h2>
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-cloud tracking-tight mb-4 drop-shadow-2xl uppercase"
                            >
                                PAUL PRINCE
                            </motion.h1>

                            <div className="h-24 md:h-32 mb-16 flex items-center justify-center lg:justify-start">
                                <span className="text-lg md:text-xl font-mono text-cloud/90 block mr-4 tracking-widest uppercase font-bold self-start mt-2">A</span>
                                <div className="w-full max-w-lg">
                                    <MorphingText
                                        texts={roles}
                                        className="font-heading font-extrabold italic text-ivory tracking-tight text-3xl md:text-5xl lg:text-6xl text-left lg:text-left !leading-normal"
                                    />
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="flex flex-col sm:flex-row items-center gap-6"
                            >
                                <MagneticButton
                                    className="group relative px-8 py-4 bg-accent-gold text-charcoal-dark font-bold rounded-full overflow-hidden flex items-center gap-2 hover:shadow-[0_0_40px_rgba(226,184,83,0.6)] transition-all active:scale-95"
                                    onClick={() => window.open('/cv.pdf', '_blank')}
                                >
                                    DOWNLOAD CV <Download className="w-4 h-4" />
                                    <motion.div
                                        className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                                    />
                                </MagneticButton>

                                <button className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cloud/70 hover:text-accent-gold transition-colors group">
                                    EXPLORE UNIVERSE <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </motion.div>
                        </div>

                        {/* Right: Orbiting Tech Stack (The Sun in front) */}
                        <div className="flex-1 flex items-center justify-center relative z-30">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                            >
                                <OrbitingTechStack />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Atmospheric Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[30vw] h-[30vw] border border-accent-blue/5 rounded-full" />
                <div className="absolute bottom-[10%] left-[5%] w-[20vw] h-[20vw] border border-accent-blue/5 rounded-full" />
            </div>
        </section>
    );
}
