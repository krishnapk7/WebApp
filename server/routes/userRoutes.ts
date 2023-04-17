import express from "express";
import { addUser } from "../controllers/userController";

const router = express.Router();

router.post("/addUser", addUser);

export default router;
