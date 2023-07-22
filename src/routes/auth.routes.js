import { Router } from "express";
import { loginUser, regiterUser } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/register", regiterUser);
router.post("/login", loginUser);

export default router;