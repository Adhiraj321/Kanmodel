"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery1.jpg",
    "/gallery5.jpg",
    "/gallery4.jpg",
    "/gallery3.jpg",
    "/gallery2.jpg",
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                        className="relative group cursor-zoom-in break-inside-avoid mb-8"
                        onClick={() => setSelectedImage(src)}
                        layoutId={`image-${src}`}
                    >
                        <div className="bg-white p-4 pb-12 shadow-md hover:shadow-2xl transition-all duration-500 rounded-sm rotate-0 group-hover:scale-[1.02] group-hover:-translate-y-2">
                            <motion.img
                                src={src}
                                alt={`Portfolio image ${index + 1}`}
                                className="w-full h-auto object-cover filter contrast-[1.05]"
                            />
                            {/* Polaroid Label area */}
                            <div className="absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="font-handwriting text-foreground/60 text-sm">#{index + 1}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 right-8 text-white hover:text-gray-300 z-50 p-2"
                        >
                            <X size={32} />
                        </button>

                        <motion.img
                            layoutId={`image-${selectedImage}`}
                            src={selectedImage}
                            alt="Expanded portfolio image"
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
