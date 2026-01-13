"use client";

import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521119989659-a83eee488058?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop",
];

export function Gallery() {
    return (
        <section className="min-h-screen bg-background py-20 px-4 md:px-8">
            <div className="max-w-[1600px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative overflow-hidden group cursor-pointer break-inside-avoid"
                    >
                        <img
                            src={src}
                            alt={`Portfolio image ${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-serif italic text-xl">View Project</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
