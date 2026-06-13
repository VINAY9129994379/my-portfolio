import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";

import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());

// Clerk auth (after env load)
app.use(clerkMiddleware());

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Backend running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});