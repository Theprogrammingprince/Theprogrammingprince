"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Safari } from "./ui/safari";

interface ProjectCardProps {
    title: string;
    category: string;
    description?: string;
    tech?: string[];
    image?: string;
    index: number;
    link?: string;
    isFlagship?: boolean;
}

export function ProjectCard({ title, category, description, tech = [], image, index, link, isFlagship }: ProjectCardProps) {
    const CardContent = (
        <div className="project-card relative flex-shrink-0 w-[85vw] md:w-[65vw] lg:w-[55vw] mr-12 md:mr-24 first:ml-6 md:first:ml-24 group">
            <Safari
                url={link}
                className="w-full shadow-2xl"
            >
                <motion.div
                    className="relative h-full w-full min-h-[380px] md:min-h-[460px] bg-charcoal-light overflow-hidden flex flex-col justify-end p-8 md:p-12"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-charcoal-dark to-[#0f172a] flex items-center justify-center">
                            <div className="text-center p-8">
                                <span className="text-6xl md:text-8xl font-serif font-black text-white/5 uppercase tracking-wider block">
                                    {title}
                                </span>
                                <span className="text-xs font-mono text-accent-gold/60 uppercase tracking-[0.3em] mt-2 block">
                                    {category}
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-accent-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Content Details */}
                    <div className="relative z-20 text-cloud">
                        {isFlagship && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-accent-gold/20 text-accent-gold border border-accent-gold/40 mb-3">
                                ★ Flagship Full-Stack System
                            </span>
                        )}

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xs font-mono uppercase tracking-[0.3em] mb-2 text-accent-gold"
                        >
                            {category}
                        </motion.p>

                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl md:text-4xl font-serif font-bold tracking-tight"
                        >
                            {title}
                        </motion.h3>

                        {description && (
                            <p className="text-xs md:text-sm text-cloud/75 font-sans mt-2 max-w-xl line-clamp-2 leading-relaxed">
                                {description}
                            </p>
                        )}

                        {tech.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cloud/90 tracking-wide"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-[1px] bg-accent-gold/40 mt-6 origin-left"
                        />
                    </div>
                </motion.div>
            </Safari>

            {/* Top Bar Indicators */}
            <div className="absolute top-8 right-8 z-20 flex items-center gap-3">
                <span className="text-xs font-mono text-cloud/50 bg-charcoal-dark/80 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                    NO. 0{index + 1}
                </span>
                {link && (
                    <span className="text-[11px] font-mono text-accent-gold bg-accent-gold/10 border border-accent-gold/30 px-3 py-1 rounded-full uppercase tracking-wider group-hover:bg-accent-gold group-hover:text-charcoal-dark transition-colors">
                        VISIT ↗
                    </span>
                )}
            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block outline-none cursor-pointer">
                {CardContent}
            </a>
        );
    }

    return CardContent;
}
