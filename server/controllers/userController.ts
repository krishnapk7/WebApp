import User from "../models/User";
import asyncHandler from "express-async-handler";

export const addUser = asyncHandler(async (req, res) => {
  const { name, email, profile_pic } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    console.log(user);
    throw new Error("User already Exists");
  }

  const newUser = new User({
    name,
    email,
    profile_pic,
  });
  await newUser.save();
  res.status(200);
});
