import User from "../models/User";
import asyncHandler from "express-async-handler";

export const addUser = asyncHandler(async (req, res) => {
  const { name, email, username, profile_pic, user_id } = req.body;
  if (await User.findOne({ email })) {
    res.status(400);
    throw new Error("User already Exists");
  }

  const newUser = new User({
    name,
    email,
    username,
    profile_pic,
    user_id,
  });
  await newUser.save();
  res.status(200);
});
