import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-education-title">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex-shrink-0">
                <GraduationCap className="h-10 w-10 text-purple-500" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold" data-testid="text-degree">
                    Bachelor's Degree in Computer Science
                  </h3>
                  <Badge variant="secondary" className="font-mono text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    2022 – 2026
                  </Badge>
                </div>
                
                <p className="text-lg text-muted-foreground mb-4" data-testid="text-university">
                  L.J. Institute of Engineering and Technology
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span data-testid="text-education-location">Ahmedabad, India</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
