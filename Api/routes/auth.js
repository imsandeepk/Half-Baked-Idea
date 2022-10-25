import express from "express";
import { register } from "../controller/auth.js";

const router =express.Router();
router.post("/register",register);
router.post("./login",)

export default router;