"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "React / Next.js", level: "Expert", category: "Frameworks" },
    { name: "TypeScript", level: "Advanced", category: "Languages" },
    { name: "GSAP / Framer Motion", level: "Senior", category: "Animations" },
    { name: "Tailwind CSS", level: "Master", category: "Styling" },
    { name: "Three.js / WebGL", level: "Deep", category: "3D Graphics" },
    { name: "UI/UX Strategy", level: "Veteran", category: "Design" },
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
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-cloud mb-4">EXPERIENCE MATRIX</h2>
                    <p className="text-foreground/60 font-mono text-sm tracking-widest uppercase">The architectural foundation of 5+ years.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
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
                            className={`relative overflow-hidden group rounded-2xl bg-charcoal-light border border-white/5 p-8 flex flex-col justify-between cursor-pointer ${index === 0 ? "md:col-span-2" : ""
                                } ${index === 4 ? "md:col-span-2" : ""}`}
                        >
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <span className="text-xs font-mono text-accent-blue/60 uppercase tracking-widest">{skill.category}</span>
                                <h3 className="text-2xl md:text-3xl font-serif text-cloud mt-2">{skill.name}</h3>
                            </div>

                            <div className="relative z-10 flex justify-between items-end">
                                <span className="text-4xl md:text-5xl font-serif font-black text-cloud/10 group-hover:text-accent-blue/40 transition-colors duration-500">
                                    {skill.level}
                                </span>
                                <div className="h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
                            </div>

                            {/* Decorative corner lines */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent-blue/20 group-hover:border-accent-blue/60 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent-blue/20 group-hover:border-accent-blue/60 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
