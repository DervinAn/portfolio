import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API route for contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: "Missing required fields. Please provide name, email, and message." 
      });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: "Please provide a valid email address." 
      });
    }
    
    console.log("Contact form submission:", { name, email, subject, message });
    
    res.status(200).json({ 
      message: "Thank you for your message! I'll get back to you soon." 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ 
      message: "Something went wrong. Please try again later." 
    });
  }
});

// Start the server
async function startServer() {
  const server = createServer(app);
  
  // Development mode with Vite
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  
  app.use(vite.middlewares);
  
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    
    try {
      const template = fs.readFileSync(
        path.resolve(process.cwd(), "client/index.html"),
        "utf-8"
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, "0.0.0.0", () => {
    const formattedTime = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    console.log(`${formattedTime} [express] serving on port ${PORT}`);
  });
}

startServer().catch(console.error);