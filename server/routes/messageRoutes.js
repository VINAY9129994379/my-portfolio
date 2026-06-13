import express from "express";
import {
  getMessages,
  deleteMessage,
} from "../controllers/messageController.js";
import { adminOnly } from "../middleware/adminOnly.js";

const router = express.Router();

router.get("/", adminOnly, getMessages);
router.delete("/:id", adminOnly, deleteMessage);

export default router;