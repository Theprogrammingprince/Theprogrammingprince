"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { ProjectScroller } from "@/components/sections/ProjectScroller";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Contact } from "@/components/sections/Contact";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen bg-background">
        <CursorFollower />

        <AnimatePresence mode="wait">
          <motion.div
            key="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero />
            <BentoGrid />
            <ProjectScroller />
            <ProcessTimeline />
            <Contact />
          </motion.div>
        </AnimatePresence>

        {/* Global Page Transition Mask */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="fixed inset-0 z-[10000] bg-accent-blue origin-top"
        />
      </main>
    </SmoothScrollProvider>
  );
}
