import User from "../models/User.js";
import jwt from "jsonwebtoken";


export const protectedRoute = async(req, res, next) => {
    
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return res.json({ message: "User not found" });
        } else {
            req.user = user;
            next();
        }
    } catch (error) {
        console.log("error in checkAuth", error.message);
        return res.status(401).json({ message: "Unauthorized" });
    }
}