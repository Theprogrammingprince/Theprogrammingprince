"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const socialLinks = [
    { name: "LINKEDIN", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "GITHUB", icon: <Github className="w-5 h-5" />, href: "https://github.com/Theprogrammingprince" },
    { name: "X", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "EMAIL", icon: <Mail className="w-5 h-5" />, href: "mailto:eragbele.paul@gmail.com" },
];

export function Contact() {
    return (
        <section id="contact" className="relative py-48 px-6 bg-charcoal-default overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-gold/10 blur-[150px] rounded-full opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-mono text-accent-gold uppercase tracking-[0.5em] mb-8"
                    >
                        LET'S COLLABORATE
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl lg:text-9xl font-serif font-black text-cloud tracking-tighter mb-16 leading-tight"
                    >
                        READY TO BUILD <br /> THE <span className="text-accent-gold italic">FUTURE?</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-8 items-center justify-center mb-24"
                    >
                        <MagneticButton className="px-12 py-6 bg-accent-gold text-charcoal-dark font-bold rounded-full text-xl flex items-center gap-3 hover:shadow-[0_0_40px_rgba(226, 184, 83, 0.6)] transition-all">
                            START A PROJECT <Mail className="w-6 h-6" />
                        </MagneticButton>

                        <a href="mailto:paul@example.com" className="text-cloud/60 hover:text-accent-gold transition-colors font-mono text-lg underline underline-offset-8 decoration-accent-gold/30">
                            paul.prince@engineer.com
                        </a>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="group relative h-32 flex flex-col items-center justify-center border border-white/5 bg-charcoal-light/30 rounded-2xl hover:bg-charcoal-light transition-colors overflow-hidden"
                            >
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="w-4 h-4 text-accent-gold" />
                                </div>
                                <div className="text-cloud/40 group-hover:text-accent-gold transition-colors mb-2">
                                    {link.icon}
                                </div>
                                <span className="text-xs font-mono tracking-widest text-cloud/60">{link.name}</span>

                                {/* Reveal line on hover */}
                                <div className="absolute bottom-0 left-0 h-1 bg-accent-gold w-0 group-hover:w-full transition-all duration-500" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Neo-Deco Lines */}
            <div className="absolute top-0 left-12 w-[1px] h-full bg-white/5" />
            <div className="absolute top-0 right-12 w-[1px] h-full bg-white/5" />
        </section>
    );
}
