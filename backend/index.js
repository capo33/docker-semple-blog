import cors from "cors";
import express from "express";
 
import blogRoutes from "./routes/Blog.routes.js";

// Create Express app
const app = express();

// Port number
const port = 4000;

// Use middlewares
app.use(cors());

// A sample route
app.get("/", blogRoutes);

// Start the Express server
app.listen(port, () => console.log(`Server running on port ${port}!`));
