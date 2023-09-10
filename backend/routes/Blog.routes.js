import { Router } from "express";

import * as BlogController from "../controllers/Blog.controller.js";

const router = Router();

// GET /api/blogs
router.get("/", BlogController.getData);

export default router;