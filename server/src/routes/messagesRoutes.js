import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import { getAllMessages, getUserForSidebar, markMessageAsSeen } from "../controllers/messageController.js";
const router = express.Router();


router.get("/users", protectedRoute, getUserForSidebar);
router.get("/:id", protectedRoute, getAllMessages);
router.put("mark/:id", protectedRoute, markMessageAsSeen);

export default router;