import mongoose, { Document, Schema } from "mongoose";

export interface NoteInterface {
  name: string;
  text: string;
}

export interface NoteModel extends NoteInterface, Document {}

const NoteSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  text: { type: String, required: true, unique: false },
});

export default mongoose.model<NoteModel>("Note", NoteSchema);
