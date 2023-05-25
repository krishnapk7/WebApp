import { addNote, getNotes } from "../controllers/noteController";
import express from "express";

const router = express.Router();

router.post("/addNote", addNote);
router.post("/getNotes", getNotes);

export default router;
