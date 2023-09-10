import express from "express";
import cors from "cors";

// Create Express app
const app = express();

// Port number
const port = 3000;

// Use middlewares
app.use(cors());

// A sample route
app.get("/", (req, res) => res.send("Hello World!"));

// Start the Express server
app.listen(port, () => console.log(`Server running on port ${port}!`));
