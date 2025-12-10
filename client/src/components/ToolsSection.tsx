import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiPython, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy,
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs,
  SiMongodb, 
  SiPostgresql,
  SiVercel,
  SiLinux,
  SiOpenai
} from "react-icons/si";

const tools = [
  { name: "Python", icon: SiPython, category: "Languages" },
  { name: "Scikit-learn", icon: SiScikitlearn, category: "ML" },
  { name: "Pandas", icon: SiPandas, category: "Data" },
  { name: "NumPy", icon: SiNumpy, category: "Data" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "Vercel", icon: SiVercel, category: "Cloud" },
  { name: "Linux", icon: SiLinux, category: "DevOps" },
  { name: "OpenAI", icon: SiOpenai, category: "AI" },
];

export default function ToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-tools-title">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                className="p-4 bg-card/50 backdrop-blur-sm border-card-border flex flex-col items-center gap-3 hover-elevate transition-transform duration-300"
                data-testid={`card-tool-${tool.name.toLowerCase().replace(/\./g, '')}`}
              >
                <tool.icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-foreground" />
                <span className="font-mono text-xs text-center text-muted-foreground">
                  {tool.name}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
