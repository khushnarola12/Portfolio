import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Python", level: 95, category: "Languages" },
  { name: "Machine Learning", level: 90, category: "AI/ML" },
  { name: "LLM Integrations", level: 88, category: "AI/ML" },
  { name: "Prompt Engineering", level: 85, category: "AI/ML" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "MERN Stack", level: 85, category: "Full Stack" },
  { name: "Pandas / NumPy", level: 88, category: "Data" },
  { name: "Scikit-learn", level: 85, category: "AI/ML" },
  { name: "REST APIs", level: 90, category: "Backend" },
  { name: "SQL / MongoDB", level: 85, category: "Database" },
  { name: "n8n / Clay Automation", level: 80, category: "Tools" },
  { name: "Cloud (Vercel, Linux)", level: 82, category: "DevOps" },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" data-testid={`text-skill-name-${skill.name.toLowerCase().replace(/\s/g, '-')}`}>
          {skill.name}
        </span>
        <span className="font-mono text-xs text-muted-foreground" data-testid={`text-skill-level-${skill.name.toLowerCase().replace(/\s/g, '-')}`}>
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-skills-title">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
