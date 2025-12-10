import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "khushnarola08@gmail.com", href: "mailto:khushnarola08@gmail.com" },
    { icon: MapPin, label: "Location", value: "Surat, India", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/khushal-narola" },
    { icon: Github, label: "GitHub", href: "https://github.com/khushnarola12" },
  ];

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Available for AI/ML roles. Open to remote and relocation opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border h-full">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    data-testid="button-send-another"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={errors.name ? "border-destructive" : ""}
                      data-testid="input-name"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? "border-destructive" : ""}
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={errors.message ? "border-destructive" : ""}
                      data-testid="input-message"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
                    disabled={isSubmitting}
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-contact-${item.label.toLowerCase()}`}
                  >
                    <div className="p-2 rounded-md bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                      <item.icon className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
              <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    onClick={() => window.open(link.href, "_blank")}
                    data-testid={`button-social-${link.label.toLowerCase()}`}
                  >
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.label}
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <p className="text-center font-medium">
                Available for AI/ML roles
              </p>
              <p className="text-center text-sm text-muted-foreground mt-1">
                Open to remote and relocation opportunities
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
