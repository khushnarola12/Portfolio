import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Briefcase, GraduationCap } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: MapPin, label: "Surat, India" },
    { icon: Mail, label: "khushnarola08@gmail.com" },
    { icon: Briefcase, label: "Open to Remote & Relocation" },
    { icon: GraduationCap, label: "B.Tech in Computer Science" },
  ];

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border">
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-bio">
                AI/ML-focused Full-Stack Engineer experienced in building intelligent, 
                data-driven, and scalable applications. Skilled in Python-based machine learning, 
                LLM integrations, automation workflows, and production-ready web platforms using Next.js.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-about-achievements">
                Proven track record deploying secure execution sandboxes (E2B), automated background 
                processing, and improving product metrics through ML-powered features. Passionate about 
                leveraging AI to solve real-world problems.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Card className="p-4 bg-card/50 backdrop-blur-sm border-card-border flex items-center gap-4">
                  <div className="p-2 rounded-md bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                    <item.icon className="h-5 w-5 text-purple-500" />
                  </div>
                  <span className="text-foreground" data-testid={`text-about-highlight-${index}`}>
                    {item.label}
                  </span>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              <Badge variant="secondary" className="font-mono text-xs">30% efficiency boost</Badge>
              <Badge variant="secondary" className="font-mono text-xs">25% engagement increase</Badge>
              <Badge variant="secondary" className="font-mono text-xs">E2B sandbox expert</Badge>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
