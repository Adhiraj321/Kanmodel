"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 opacity-20">
                {/* Placeholder for a background video or large image */}
                <div className="w-full h-full bg-[url('/hero.jpg')] bg-cover bg-center grayscale" />
            </div>

            <div className="z-10 text-center space-y-4 mix-blend-difference text-white">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-sm md:text-base uppercase tracking-[0.2em]"
                >
                    Aspiring Model
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-9xl font-serif font-medium tracking-tight"
                >
                    KANISHK
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-sm md:text-base uppercase tracking-[0.2em] mt-4"
                >
                    Based in Gurgaon
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white mix-blend-difference"
            >
                <div className="animate-bounce text-xs uppercase tracking-widest">
                    Scroll
                </div>
            </motion.div>
        </section>
    );
}
