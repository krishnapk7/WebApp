import { addNote, getNotes, deleteNote } from "../controllers/noteController";
import express from "express";

const router = express.Router();

router.post("/addNote", addNote);
router.post("/getNotes", getNotes);
router.post("/deleteNote", deleteNote);

export default router;
