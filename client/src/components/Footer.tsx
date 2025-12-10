import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/khushnarola12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/khushal-narola", label: "LinkedIn" },
    { icon: Mail, href: "mailto:khushnarola08@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                size="icon"
                variant="ghost"
                onClick={() => window.open(link.href, "_blank")}
                data-testid={`button-footer-${link.label.toLowerCase()}`}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center flex items-center gap-1 flex-wrap justify-center" data-testid="text-footer-copyright">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Khushal Narola
          </p>

          <p className="text-sm text-muted-foreground" data-testid="text-footer-year">
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
