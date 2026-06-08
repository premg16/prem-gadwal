"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-bg/90 backdrop-blur-sm"
          : "border-b border-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-serif italic text-lg text-text/70 hover:text-text transition-colors duration-300"
      >
        prem.
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.5 + i * 0.07 }}
          >
            <Link
              href={link.href}
              className="text-sm text-muted hover:text-text transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <Link
        href="/personal/resume.pdf"
        target="_blank"
        className="md:hidden text-xs text-muted hover:text-text transition-colors border border-border px-3 py-1.5"
      >
        Resume
      </Link>
    </motion.header>
  );
}
