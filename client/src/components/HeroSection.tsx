import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const greetings = [
  { text: "Hello, I'm", lang: "English" },
  { text: "Namaste, Main hoon", lang: "Hindi" },
  { text: "Hola, Soy", lang: "Spanish" },
  { text: "Bonjour, Je suis", lang: "French" },
  { text: "Hallo, Ich bin", lang: "German" },
  { text: "Ciao, Sono", lang: "Italian" },
  { text: "Olá, Eu sou", lang: "Portuguese" },
  { text: "Konnichiwa, Watashi wa", lang: "Japanese" },
  { text: "Annyeonghaseyo, Jeoneun", lang: "Korean" },
  { text: "Nǐ hǎo, Wǒ shì", lang: "Chinese" },
];

function TypewriterText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentGreeting = greetings[currentIndex].text;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentGreeting.length) {
          setDisplayText(currentGreeting.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % greetings.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="font-mono text-sm md:text-base text-muted-foreground">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-8 mb-4"
          data-testid="text-greeting"
        >
          <TypewriterText />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          data-testid="text-hero-name"
        >
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Khushal Narola
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          data-testid="text-hero-title"
        >
          AI/ML-focused Full-Stack Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          data-testid="text-hero-description"
        >
          Building intelligent, data-driven, and scalable applications with Python, 
          Machine Learning, LLM integrations, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-purple-600 to-blue-600 border-purple-500"
            data-testid="button-view-projects"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            data-testid="button-contact-me"
          >
            <Download className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
