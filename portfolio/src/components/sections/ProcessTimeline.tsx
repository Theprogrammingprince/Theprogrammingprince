"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    {
        year: "2018",
        title: "SYSTEMS & HARDWARE",
        description: "Hardware & technical support intern at Microchips System. Diagnosed low-level machine architecture and built an enduring instinct for systems-level debugging."
    },
    {
        year: "2020",
        title: "THE SOFTWARE GENESIS",
        description: "Commenced dedicated software engineering journey. Dove deep into web architecture, JavaScript, Python, DOM manipulation, and core programming paradigms."
    },
    {
        year: "2022",
        title: "FULL-STACK ARCHITECTURE",
        description: "Advanced into modern full-stack systems. Mastered React, TypeScript, relational databases, RESTful APIs, and state management patterns."
    },
    {
        year: "2024",
        title: "ACADEMIC & PROFESSIONAL IMMERSION",
        description: "Pursuing B.Sc. Computer Science (NOUN) alongside software development internship at Outsource Global (Qwasar Programme) — remote Agile delivery, strict Git workflows, and collaborative engineering."
    },
    {
        year: "2025+",
        title: "SHIPPING PRODUCTION PLATFORMS",
        description: "Architecting and deploying live, scalable web platforms: Harzock Hotel PMS (PostgreSQL & inventory), Bailout.ng (fintech capital access with Supabase Edge), HealthChain, and NexaEdu LMS."
    },
];

export function ProcessTimeline() {
    const lineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const line = lineRef.current;
            const container = containerRef.current;
            if (!line || !container) return;

            gsap.to(line, {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            });

            // Animate milestones
            gsap.utils.toArray(".milestone").forEach((el: any) => {
                gsap.from(el, {
                    opacity: 0,
                    x: el.classList.contains("left") ? -50 : 50,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: true,
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-48 px-6 bg-charcoal-dark min-h-screen">
            <div className="max-w-4xl mx-auto relative">
                <h2 className="text-4xl md:text-7xl font-serif font-black text-cloud text-center mb-32 tracking-tighter uppercase whitespace-nowrap">
                    <span className="text-accent-gold/70">5+ YEARS</span> OF BUILDING
                </h2>

                {/* Vertical Line Container */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/5 hidden md:block">
                    <div ref={lineRef} className="w-full bg-accent-gold origin-top h-0 shadow-[0_0_15px_rgba(226,184,83,0.5)]" />
                </div>

                <div className="space-y-48">
                    {milestones.map((ms, index) => (
                        <div
                            key={ms.year}
                            className={`milestone relative flex flex-col items-center md:items-start md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse left" : "right"
                                }`}
                        >
                            <div className={`md:w-1/2 p-8 ${index % 2 === 0 ? "md:pl-16 text-center md:text-left" : "md:pr-16 text-center md:text-right"}`}>
                                <span className="text-5xl md:text-7xl font-serif font-black text-accent-gold/40 mb-4 block">{ms.year}</span>
                                <h3 className="text-2xl md:text-3xl font-serif text-cloud mb-4">{ms.title}</h3>
                                <p className="text-foreground/80 leading-relaxed font-sans">{ms.description}</p>
                            </div>

                            {/* Dot on line */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-12 w-4 h-4 rounded-full border-2 border-accent-gold bg-charcoal-dark z-10 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
