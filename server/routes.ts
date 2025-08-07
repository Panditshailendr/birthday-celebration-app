import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWishSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all wishes
  app.get("/api/wishes", async (req, res) => {
    try {
      const wishes = await storage.getWishes();
      res.json(wishes);
    } catch (error) {
      console.error("Error fetching wishes:", error);
      res.status(500).json({ message: "Failed to fetch wishes" });
    }
  });

  // Create a new wish
  app.post("/api/wishes", async (req, res) => {
    try {
      const validatedData = insertWishSchema.parse(req.body);
      const wish = await storage.createWish(validatedData);
      res.status(201).json(wish);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid wish data", errors: error.errors });
      } else {
        console.error("Error creating wish:", error);
        res.status(500).json({ message: "Failed to create wish" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
