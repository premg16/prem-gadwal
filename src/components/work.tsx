"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Work() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-5 mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-text">Work</h2>
          <span className="text-xs text-muted tracking-widest uppercase">Experience</span>
        </motion.div>

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="flex items-baseline justify-between mb-8">
                <div>
                  <h3 className="text-text text-xl mb-1">{exp.company}</h3>
                  <p className="text-muted text-sm">{exp.location}</p>
                </div>
                <span className="font-mono text-sm text-muted">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>

              <div className="space-y-10 border-l border-border-subtle pl-6 md:pl-10">
                {exp.projects.map((project) => {
                  const key = `${exp.id}-${project.id}`;
                  const isOpen = expanded === key;
                  return (
                    <div key={project.id}>
                      <button
                        onClick={() => setExpanded(isOpen ? null : key)}
                        className="w-full text-left group"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <p className="text-text/90 group-hover:text-text transition-colors text-base mb-0.5">
                              {project.name}
                            </p>
                            <p className="text-muted text-xs">{project.role}</p>
                          </div>
                          <span className="text-muted text-xs mt-1 flex-shrink-0 font-mono">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        <p className="text-muted text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </button>

                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-5 space-y-2"
                        >
                          {project.achievements?.map((ach, ai) => (
                            <div key={ai} className="flex gap-3">
                              <span className="text-faint text-xs mt-1 flex-shrink-0 font-mono">
                                {String(ai + 1).padStart(2, "0")}
                              </span>
                              <p className="text-muted text-sm leading-relaxed">{ach}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-faint border border-border-subtle px-2 py-0.5 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
