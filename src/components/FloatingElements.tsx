"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingElements() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const elements = Array.from({ length: 15 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {elements.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        y: [null, Math.random() * -50], // Slower movement
                        opacity: [0, 0.3, 0], // Subtle opacity
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15, // Very slow
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5,
                    }}
                    className="absolute text-primary/20"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
