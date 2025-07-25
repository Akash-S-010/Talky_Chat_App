import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import connectDB from "./src/config/db.js";


const app = express();
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/status", (req, res) => {
    res.send("Server is running");``
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

