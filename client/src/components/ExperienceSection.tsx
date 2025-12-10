import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "AI/ML Freelancer",
    company: "Freelancing",
    location: "Surat",
    period: "Jun 2025 – Present",
    achievements: [
      "Built intelligent AI automation workflows using n8n and Clay, increasing operational efficiency by 30%",
      "Developed ML-based data pipelines and automated decision engines for production use",
      "Delivered Next.js-based platforms with a 25% boost in user engagement",
      "Integrated secure E2B sandbox environments for safe execution of user-submitted code and LLM-assisted tasks",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-experience-title">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-background z-10" />
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border md:w-[calc(50%-2rem)] md:ml-auto">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold" data-testid={`text-exp-title-${index}`}>
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground font-medium" data-testid={`text-exp-company-${index}`}>
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="secondary" className="font-mono text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {exp.period}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span data-testid={`text-exp-location-${index}`}>{exp.location}</span>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-purple-500 mt-1.5">
                        <Briefcase className="h-3 w-3" />
                      </span>
                      <span data-testid={`text-exp-achievement-${index}-${i}`}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
