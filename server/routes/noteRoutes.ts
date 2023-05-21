import { addNote } from "../controllers/noteController";
import express from "express";

const router = express.Router();

router.post("/addNote", addNote);

export default router;
