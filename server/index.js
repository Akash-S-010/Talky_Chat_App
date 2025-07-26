import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import messageRoutes from "./src/routes/messagesRoutes.js";


const app = express();
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// test route
app.use("/api/status", (req, res) => {
    res.send("Server is running");``
})


// api routes
app.use("/api/auth", userRoutes);
app.use("api/messages", messageRoutes);




server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

