import express from "express";
import {
  getProjects,
  getProjectById,
  addProject,
  deleteProject,
} from "../controllers/projectController.js";
import { adminOnly } from "../middleware/adminOnly.js";


const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);

router.post("/add", adminOnly, addProject);
router.delete("/:id", adminOnly, deleteProject);

export default router;