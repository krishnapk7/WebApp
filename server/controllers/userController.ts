import User from "../models/User";
import asyncHandler from "express-async-handler";

export const addUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, profile_pic } = req.body;

    const newUser = new User({
      name,
      email,
      profile_pic,
    });

    console.log(newUser);

    await newUser.save();
    res.status(200).json();
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
