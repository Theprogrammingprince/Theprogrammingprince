"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { useEffect } from "react";

interface CvModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-6 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/85 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 w-full max-w-5xl h-[92vh] bg-charcoal-light border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header Bar */}
                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-charcoal-dark/95">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-cloud text-sm sm:text-base">Paul Prince — CV</h3>
                                    <p className="font-mono text-[11px] text-accent-gold/70">Full-Stack Software Developer</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3">
                                <a
                                    href="/cv.pdf"
                                    download="Paul_Prince_FullStack_Developer_CV.pdf"
                                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-cloud/80 hover:text-accent-gold text-xs font-mono transition-colors"
                                >
                                    <Download className="w-3.5 h-3.5" /> Save File
                                </a>
                                <a
                                    href="/cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-gold/10 hover:bg-accent-gold/20 border border-accent-gold/30 text-accent-gold text-xs font-mono transition-colors"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" /> Fullscreen ↗
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-cloud/60 hover:text-cloud transition-colors cursor-pointer"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Inline PDF Viewer Frame */}
                        <div className="flex-1 w-full h-full bg-[#1e1e1e] relative">
                            <iframe
                                src="/cv.pdf#toolbar=1"
                                className="w-full h-full border-none"
                                title="Paul Prince Curriculum Vitae"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
