import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: parsed.error.message });
      }

      const message = await storage.createContactMessage(parsed.data);

      if (resend) {
        try {
          await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: "khushnarola08@gmail.com",
            subject: `New Contact Message from ${message.name}`,
            text: `Name: ${message.name}\nEmail: ${message.email}\nMessage: ${message.message}`,
          });
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
        }
      } else {
        console.warn("RESEND_API_KEY not found. Email not sent.");
      }

      res.status(200).json(message);
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
