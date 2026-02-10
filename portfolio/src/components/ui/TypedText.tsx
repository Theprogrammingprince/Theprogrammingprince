"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypedTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export function TypedText({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
}: TypedTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleTyping = () => {
            const fullText = texts[currentIndex];

            if (!isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length + 1));

                if (displayText === fullText) {
                    timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
                } else {
                    timeout = setTimeout(handleTyping, typingSpeed);
                }
            } else {
                setDisplayText(fullText.substring(0, displayText.length - 1));

                if (displayText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                    timeout = setTimeout(handleTyping, 500);
                } else {
                    timeout = setTimeout(handleTyping, deletingSpeed);
                }
            }
        };

        timeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className="relative">
            <span className="text-accent-blue">{displayText}</span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-1 h-8 md:h-12 bg-accent-blue ml-1 align-middle"
            />
        </span>
    );
}
