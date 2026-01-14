"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    { href: "/", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 mix-blend-difference text-white">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
                A.
            </Link>
            <ul className="flex gap-8">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
