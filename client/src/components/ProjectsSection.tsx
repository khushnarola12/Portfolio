import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import claudeCloneImg from "@assets/generated_images/claude_clone_ai_platform.png";
import spotifyCloneImg from "@assets/generated_images/spotify_clone_music_app.png";
import dalleCloneImg from "@assets/generated_images/dall-e_clone_image_generator.png";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: "vibe-nexus",
    title: "Vibe Nexus",
    description: "Advanced Code Platform with secure E2B sandbox-based code execution and intelligent reasoning.",
    longDescription: "Built a production-grade chat and code execution platform. Key features include secure E2B sandbox-based code execution, automated background job handling, long-running task orchestration, and advanced reasoning for code understanding and generation.",
    image: claudeCloneImg,
    technologies: ["Next.js", "E2B", "LLM", "TypeScript", "Tailwind"],
    github: "https://github.com/khushnarola12/Vibe",
    live: "https://vibe-eta-lime.vercel.app/",
  },
  {
    id: "melodify",
    title: "Melodify",
    description: "Enhanced Music Platform with real-time streaming and personalized playlist recommendations.",
    longDescription: "Full-stack music streaming application built with Next.js. Includes secure authentication, real-time audio streaming, and a personalized playlist recommendation engine.",
    image: spotifyCloneImg,
    technologies: ["Next.js", "Auth", "Streaming", "MongoDB"],
    github: "https://github.com/khushnarola12/Spotify-clone",
    live: "https://spotify-clone-gamma-rust.vercel.app/",
  },
  {
    id: "visionary-studio",
    title: "Visionary Studio",
    description: "Image Generation Platform with prompt-based creation and history tracking.",
    longDescription: "Image-generation web application using Next.js and OpenAI Image API. Includes prompt-based image creation, image history, and modern UI.",
    image: dalleCloneImg,
    technologies: ["Next.js", "OpenAI", "Image API", "React", "Tailwind"],
    github: "https://github.com/khushnarola12/dall-e",
    live: "#",
  },
];

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card 
        className="overflow-hidden bg-card/50 backdrop-blur-sm border-card-border group cursor-pointer hover-elevate"
        onClick={onSelect}
        data-testid={`card-project-${project.id}`}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" data-testid={`text-project-title-${project.id}`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4" data-testid={`text-project-description-${project.id}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="font-mono text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, "_blank");
              }}
              data-testid={`button-github-${project.id}`}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
            {project.live !== "#" && (
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.live, "_blank");
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600"
                data-testid={`button-live-${project.id}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle data-testid="text-modal-project-title">{selectedProject.title}</DialogTitle>
                <DialogDescription data-testid="text-modal-project-description">
                  {selectedProject.longDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-video overflow-hidden rounded-md">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline"
                  onClick={() => window.open(selectedProject.github, "_blank")}
                  data-testid="button-modal-github"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                {selectedProject.live !== "#" && (
                  <Button
                    onClick={() => window.open(selectedProject.live, "_blank")}
                    className="bg-gradient-to-r from-purple-600 to-blue-600"
                    data-testid="button-modal-live"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
