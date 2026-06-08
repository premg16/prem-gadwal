"use client";

import { personalInfo } from "@/data/personal-info";
import { socialLinks } from "@/data/social-links";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-28 md:py-40 bg-surface-2">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs text-muted tracking-widest uppercase mb-8">Get in touch</p>
          <h2
            className="font-serif text-text leading-[0.92] tracking-tight mb-14"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            Let’s work
            <br />
            together.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href={`mailto:${personalInfo.email}`}
            className="inline-block text-lg md:text-2xl text-muted hover:text-text transition-colors duration-300 border-b border-border hover:border-text/30 pb-1"
          >
            {personalInfo.email} ↗
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-8 mt-14"
        >
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
    </section>
  );
}
