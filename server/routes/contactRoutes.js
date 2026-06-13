import express from "express";
import {  createMail } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createMail);

export default router;