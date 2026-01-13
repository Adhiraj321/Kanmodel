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
        <section id="about" className="py-24 px-4 md:px-8 bg-background">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-serif mb-8">About</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        A beginner here who's interested in exploring editorial and commercial work.

                        I'm Comfortable in front of the camera and open to learning, with a natural, expressive presence. Looking to gain experience and gradually break into the modeling industry through test shoots and selective projects
                    </p>
                    <div className="mt-8 border-t border-muted pt-8">
                        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">represented by</p>
                        <p className="text-xl font-serif">Elite Model Management</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 gap-y-8 gap-x-12"
                >
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{stat.label}</p>
                            <p className="text-xl font-medium">{stat.value}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
