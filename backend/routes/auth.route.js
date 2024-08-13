import express from "express"
import { forgotPassword, signup, resetPassword } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
import { verifyEmail } from "../controllers/auth.controller.js";


const router = express.Router();


router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.post("/verify-email", verifyEmail)
router.post("/forgot-password", forgotPassword)

router.post("/reset-password/:token", resetPassword)


export default router;