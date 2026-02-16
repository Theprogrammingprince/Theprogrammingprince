"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "../ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "THESIS PEN",
        category: "ACADEMIC WRITING & RESEARCH / SaaS",
        image: "/thesispen.jpg",
        link: "https://thesispen.com"
    },
    {
        title: "NEXA EDU",
        category: "EDTECH SOLUTIONS / LEARNING MANAGEMENT",
        image: "/nexa.jpg",
        link: "https://nexaedu.ng"
    },
    {
        title: "HEALTH CHAIN",
        category: "HEALTHCARE BLOCKCHAIN / WEB3 INFRASTRUCTURE",
        image: "/healthchain.jpg",
        link: "https://healthchainofficial.com"
    },
    {
        title: "HARZOCK HOTEL",
        category: "HOTEL MANAGEMENT SYSTEM",
        image: "/harzock.jpg",
        link: "https://herzokhotel.vercel.app"
    },
];

export function ProjectScroller() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const scroller = scrollerRef.current;
            const container = containerRef.current;

            if (!scroller || !container) return;

            const totalWidth = scroller.scrollWidth;
            const windowWidth = window.innerWidth;

            gsap.to(scroller, {
                x: () => -(totalWidth - windowWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1.5,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    invalidateOnRefresh: true,
                },
            });

            // Parallax effect for cards
            gsap.utils.toArray(".project-card").forEach((card: any) => {
                gsap.to(card.querySelector("div"), {
                    x: 100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: gsap.to(scroller, { x: 0 }), // Reference to the horizontal animation
                        scrub: true,
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden bg-charcoal-default">
            <div className="absolute top-24 left-24 z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-black text-cloud/20 tracking-tighter">PORTFOLIO</h2>
            </div>

            <div ref={scrollerRef} className="flex h-full items-center pl-[10vw]">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        index={index}
                        {...project}
                    />
                ))}

                <div className="flex-shrink-0 w-[50vw] flex flex-col justify-center items-center">
                    <h3 className="text-4xl font-serif text-cloud/40 italic">And more to come...</h3>
                </div>
            </div>

            <div className="absolute bottom-24 left-24 z-10 flex space-x-4 overflow-hidden">
                <div className="h-[1px] w-24 bg-accent-gold/30 self-center" />
                <span className="text-xs font-mono text-accent-gold/50 tracking-widest">DRAG OR SCROLL TO EXPLORE</span>
            </div>
        </section>
    );
}
