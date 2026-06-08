"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";

const groups: { label: string; categories: string[] }[] = [
  { label: "Languages", categories: ["programming"] },
  { label: "Frontend", categories: ["frontend"] },
  { label: "Backend", categories: ["backend"] },
  { label: "AI / ML", categories: ["ai"] },
  { label: "Cloud", categories: ["cloud"] },
  { label: "Tools", categories: ["tools"] },
  { label: "Design", categories: ["design"] },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between border-b border-border pb-5 mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-text">Skills</h2>
          <span className="text-xs text-muted tracking-widest uppercase">Expertise</span>
        </motion.div>

        <div className="space-y-8">
          {groups.map((group, gi) => {
            const groupSkills = skills.filter((s) => group.categories.includes(s.category));
            if (groupSkills.length === 0) return null;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.06 }}
                className="flex flex-col md:flex-row gap-4 md:gap-16 border-b border-border-subtle pb-8 last:border-0"
              >
                <div className="md:w-28 flex-shrink-0 pt-0.5">
                  <span className="text-xs text-muted tracking-widest uppercase">{group.label}</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {groupSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-sm text-text/50 hover:text-text/90 transition-colors duration-300 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
