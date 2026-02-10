"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    { year: "2006", title: "THE GENESIS", description: "Started as a junior designer, mastering the foundations of the web." },
    { year: "2012", title: "INTERACTIVE ERA", description: "Deep-dived into Flash and early JavaScript for experimental web experiences." },
    { year: "2018", title: "MODERN MASTERY", description: "Architecting complex SPAs and high-end design systems for enterprise." },
    { year: "2026", title: "NEO-DECO VISION", description: "Pushing the boundaries of performance and creative engineering." },
];

export function ProcessTimeline() {
    const lineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(lineRef.current, {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
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
                    <span className="text-accent-blue/40">20 YEARS</span> OF ENGINEERING
                </h2>

                {/* Vertical Line Container */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/5 hidden md:block">
                    <div ref={lineRef} className="w-full bg-accent-blue origin-top h-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>

                <div className="space-y-48">
                    {milestones.map((ms, index) => (
                        <div
                            key={ms.year}
                            className={`milestone relative flex flex-col items-center md:items-start md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse left" : "right"
                                }`}
                        >
                            <div className={`md:w-1/2 p-8 ${index % 2 === 0 ? "md:pl-16 text-center md:text-left" : "md:pr-16 text-center md:text-right"}`}>
                                <span className="text-5xl md:text-7xl font-serif font-black text-accent-blue/20 mb-4 block">{ms.year}</span>
                                <h3 className="text-2xl md:text-3xl font-serif text-cloud mb-4">{ms.title}</h3>
                                <p className="text-foreground/60 leading-relaxed font-sans">{ms.description}</p>
                            </div>

                            {/* Dot on line */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-12 w-4 h-4 rounded-full border-2 border-accent-blue bg-charcoal-dark z-10 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
