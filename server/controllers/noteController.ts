import Note from "../models/Note";
import asyncHandler from "express-async-handler";

export const addNote = asyncHandler(async (req, res) => {
  try {
    const { name, text, user } = req.body;

    const newNote = new Note({
      name,
      text,
      user,
    });

    console.log(newNote);

    await newNote.save();
    res.status(200).json();
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
