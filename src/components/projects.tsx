"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-24 md:py-32 bg-surface-2">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-5 mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-text">Projects</h2>
          <span className="text-xs text-muted tracking-widest uppercase">Selected work</span>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group border-b border-border py-8 flex flex-col md:flex-row md:items-start gap-5"
            >
              <span className="font-mono text-xs text-faint mt-1 w-7 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-6 mb-2">
                  <h3 className="text-text group-hover:text-white transition-colors text-base">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-5 flex-shrink-0">
                    <span className="font-mono text-xs text-faint hidden md:inline">{project.date}</span>
                    {project.demoUrl && project.demoUrl !== project.repoUrl && (
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-muted hover:text-text transition-colors">
                        Live ↗
                      </Link>
                    )}
                    {project.repoUrl && (
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-muted hover:text-text transition-colors">
                        GitHub ↗
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 items-center">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="text-xs text-faint border border-border-subtle px-2 py-0.5 font-mono">
                      {tag}
                    </span>
                  ))}
                  {project.status === "in-progress" && (
                    <span className="text-xs text-amber-600/70 border border-amber-900/30 px-2 py-0.5 font-mono ml-1">
                      in progress
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
