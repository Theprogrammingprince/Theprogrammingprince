"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "React 18 & Next.js", level: "Expert", category: "Frontend Architecture" },
    { name: "TypeScript", level: "Advanced", category: "Type Systems" },
    { name: "PostgreSQL & Supabase", level: "Advanced", category: "Databases & Cloud" },
    { name: "TanStack React Query", level: "Proficient", category: "Server-State & Data" },
    { name: "REST APIs & Python", level: "Advanced", category: "Backend Services" },
    { name: "Vitest & Testing Library", level: "Proficient", category: "Automated Testing" },
];

export function BentoGrid() {
    return (
        <section className="py-24 px-6 bg-charcoal-dark overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-cloud mb-3">EXPERIENCE MATRIX</h2>
                    <p className="text-foreground/60 font-mono text-xs md:text-sm tracking-widest uppercase">Production-grade engineering stack powering live web systems.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[230px]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 0.98,
                                transition: { duration: 0.2 }
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative overflow-hidden group rounded-2xl bg-charcoal-light border border-white/5 p-7 flex flex-col justify-between cursor-pointer ${index === 0 ? "md:col-span-2" : ""
                                } ${index === 4 ? "md:col-span-2" : ""}`}
                        >
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <span className="text-[11px] font-mono text-accent-gold/70 uppercase tracking-widest">{skill.category}</span>
                                <h3 className="text-xl md:text-2xl font-serif font-semibold text-cloud mt-1.5">{skill.name}</h3>
                            </div>

                            <div className="relative z-10 flex justify-between items-end">
                                <span className="text-2xl md:text-3xl font-mono font-bold text-cloud/20 group-hover:text-accent-gold/50 transition-colors duration-500">
                                    {skill.level}
                                </span>
                                <div className="h-2 w-2 rounded-full bg-accent-gold animate-pulse" />
                            </div>

                            {/* Decorative corner lines */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent-gold/20 group-hover:border-accent-gold/60 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent-gold/20 group-hover:border-accent-gold/60 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
