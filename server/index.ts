import express from "express";
import { json } from "body-parser";
import userRoutes from "./routes/userRoutes";
// @ts-ignore
import mongoose from "mongoose";
require("dotenv").config();

const app = express();

app.use(json());

app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL || "")
  .then(() => {
    console.log("connected");
  })
  .catch((error: any) => {
    console.log(error);
  });

app.listen(3001, () => {
  console.log("listening");
});
