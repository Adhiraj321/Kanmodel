"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Height", value: "5'9\"" },
    { label: "Shoes", value: "8 US" },
    { label: "Hair", value: "Black" },
    { label: "Eyes", value: "Brown" },
];

export function About() {
    return (
        <section id="about" className="py-32 px-4 md:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/50 backdrop-blur-sm p-12 rounded-[3rem] shadow-sm"
                >
                    <h2 className="text-5xl font-serif mb-8 text-foreground/80 lowercase tracking-tight">about</h2>
                    <p className="text-muted-foreground leading-loose text-xl font-light">
                        A beginner here who's interested in exploring editorial and commercial work.
                        <br /><br />
                        I'm Comfortable in front of the camera and open to learning, with a natural, expressive presence. Looking to gain experience and gradually break into the modeling industry through test shoots and selective projects.
                    </p>
                    <div className="mt-12">
                        <p className="font-handwriting text-2xl text-primary rotate-[-2deg]">currently with elite model management</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Polaroid-style Stats Card */}
                    <div className="bg-white p-8 md:p-12 rotate-2 shadow-xl rounded-sm max-w-md mx-auto">
                        <h3 className="font-handwriting text-4xl text-center mb-8 text-foreground/70">my stats</h3>
                        <div className="space-y-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex justify-between items-end border-b-2 border-dashed border-primary/20 pb-2">
                                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</span>
                                    <span className="text-2xl font-serif text-foreground">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <span className="text-5xl">📸</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
