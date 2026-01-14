"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 md:px-8 bg-transparent">
            <div className="max-w-2xl mx-auto text-center space-y-12 bg-white/40 backdrop-blur-md p-12 rounded-[3rem] shadow-xl ring-4 ring-white/40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground drop-shadow-sm">Inquiries</h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
                        Available for bookings and collaborations. Please reach out via email or contact my agency directly.
                    </p>

                    <a
                        href="mailto:trikhakanishk@gmail.com"
                        className="inline-block bg-white border-2 border-primary text-primary px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center gap-8 pt-12 border-t border-white/50"
                >
                    <a href="https://www.instagram.com/_bjkjff235__k" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full text-foreground hover:text-pink-500 hover:scale-110 transition-all duration-300 shadow-sm">
                        <Instagram size={24} />
                    </a>

                    <a href="mailto:trikhakanishk@gmail.com" className="bg-white p-4 rounded-full text-foreground hover:text-blue-400 hover:scale-110 transition-all duration-300 shadow-sm">
                        <Mail size={24} />
                    </a>
                    <a href="tel:8076132128" className="bg-white p-4 rounded-full text-foreground hover:text-green-500 hover:scale-110 transition-all duration-300 shadow-sm">
                        <Phone size={24} />
                    </a>
                </motion.div>

                <div className="text-xs text-muted-foreground mt-12 font-medium">
                    &copy; {new Date().getFullYear()} Kanishk Portfolio. Made with 💖
                </div>
            </div>
        </section>
    );
}
