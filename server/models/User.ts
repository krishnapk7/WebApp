import mongoose, { Document, Schema } from "mongoose";

export interface UserInterface {
  name: string;
  email: string;
  username: string;
  profile_pic: string;
  user_id: string;
}

export interface UserModel extends UserInterface, Document {}

const UserSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  profile_pic: { type: String, required: true, unique: false },
});

export default mongoose.model<UserModel>("User", UserSchema);
