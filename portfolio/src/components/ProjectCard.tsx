"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    index: number;
    link?: string;
}

export function ProjectCard({ title, category, image, index, link }: ProjectCardProps) {
    const CardContent = (
        <div className="project-card relative flex-shrink-0 w-[80vw] md:w-[60vw] h-[50vh] md:h-[70vh] mr-12 md:mr-24 first:ml-6 md:first:ml-24 group overflow-hidden rounded-3xl bg-charcoal-light border border-white/5 cursor-pointer">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className="relative h-full w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-charcoal-dark/40 italic text-cloud/20 text-4xl font-serif">
                            {title}
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal-dark/90 z-10" />
                    <div className={`absolute inset-0 bg-accent-blue/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-12 z-20 text-cloud">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs font-mono uppercase tracking-[0.4em] mb-4 text-accent-blue"
                >
                    {category}
                </motion.p>
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-serif font-black"
                >
                    {title}
                </motion.h3>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[2px] bg-accent-blue mt-8 origin-left"
                />
            </div>

            <div className="absolute top-12 right-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
                <span className="text-sm font-mono text-cloud/40 block">NO. 0{index + 1}</span>
                {link && <span className="text-[10px] font-mono text-accent-blue/60 uppercase tracking-widest mt-2 block">VIEW PROJECT ↗</span>}
            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                {CardContent}
            </a>
        );
    }

    return CardContent;
}
