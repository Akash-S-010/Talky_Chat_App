import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import messageRoutes from "./src/routes/messagesRoutes.js";
import { Server } from "socket.io";


const app = express();
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);


// Socket.io server
export const io = new Server(server, {
    cors: { origin:"*"}
});

// store online users
export const userSocketMap = {} // {userId: socketId}

// Socket.io Connection handler
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("User connected:", userId);

    if(userId) {
        userSocketMap[userId] = socket.id;
    }

    // Emit online users to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected:", userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})




// Middlewares
app.use(cors());
app.use(express.json());

// test route
app.use("/api/status", (req, res) => {
    res.send("Server is running"); ``
})


// api routes
app.use("/api/auth", userRoutes);
app.use("api/messages", messageRoutes);




server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

