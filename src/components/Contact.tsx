"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Twitter } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 md:px-8 bg-muted/10">
            <div className="max-w-screen-md mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h2>
                    <p className="text-muted-foreground text-lg mb-12">
                        For booking inquiries and collaborations, please contact my agency or email directly.
                    </p>

                    <a
                        href="mailto:contact@adhiraj.model"
                        className="inline-block border border-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300"
                    >
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center gap-8 pt-12 border-t border-muted/20"
                >
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <Twitter size={24} />
                    </a>
                    <a href="mailto:contact@adhiraj.model" className="hover:opacity-70 transition-opacity">
                        <Mail size={24} />
                    </a>
                </motion.div>

                <div className="text-xs text-muted-foreground mt-24">
                    &copy; {new Date().getFullYear()} Adhiraj Portfolio. All rights reserved.
                </div>
            </div>
        </section>
    );
}
