import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app) {
  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Missing required fields. Please provide name, email, and message." 
        });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address." 
        });
      }

      // In a real implementation, you would:
      // 1. Save the message to a database
      // 2. Send an email notification
      
      // For now, just return a success response
      return res.status(200).json({ 
        message: "Your message has been sent successfully. I'll get back to you soon!" 
      });
    } catch (error) {
      console.error("Error sending contact message:", error);
      return res.status(500).json({ 
        message: "An error occurred while sending your message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
