"use client";

import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";
import { motion } from "framer-motion";
import Link from "next/link";

const nameLines = ["Prem Sai", "Gadwal."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-16">
      <div className="max-w-[1300px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2.5 mb-14"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-muted tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        <div className="mb-10 overflow-hidden">
          {nameLines.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + i * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h1
                className="font-serif leading-[0.88] tracking-tight text-text"
                style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-px bg-border mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between gap-8 mb-16"
        >
          <div className="space-y-1">
            <p className="text-text text-base">{personalInfo.title}</p>
            <p className="text-muted text-sm">
              Publicis Sapient · India · 2022 — Now
            </p>
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-xs md:text-right">
            Building production-scale AI systems and web applications with
            Next.js, TypeScript, and Python.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Link
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text border border-border px-5 py-2.5 hover:border-text/50 hover:bg-surface transition-all duration-300"
          >
            Resume ↗
          </Link>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-text transition-colors duration-300"
            >
              {link.name} ↗
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-faint text-sm select-none"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
