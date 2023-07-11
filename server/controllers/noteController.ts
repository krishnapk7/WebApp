import Note from "../models/Note";
import asyncHandler from "express-async-handler";

export const addNote = asyncHandler(async (req, res) => {
  try {
    const { name, text, user, image } = req.body;

    const newNote = new Note({
      name,
      text,
      user,
      image,
    });

    console.log(newNote);

    await newNote.save();
    res.status(200).json();
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export const getNotes = asyncHandler(async (req, res) => {
  try {
    const { user } = req.body;
    const noteUser = await Note.find({ user: user });
    console.log(user);
    res.status(200).json({ noteUser });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export const deleteNote = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const note = await Note.find({ _id: id });
    console.log(note);
  } catch {}
});
