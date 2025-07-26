import User from "../models/User.js";
import generateToken from "../utils/Token.js";
import cloudinary from "../utils/cloudinary.js";
import bcrypt from "bcryptjs";


// Signup
export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        if(!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ 
            fullName, 
            email, 
            password : hashedPassword, 
            bio 
        });

        const token = generateToken(newUser._id);

       return res.status(201).json({ userData: newUser, token, message: "Account created successfully"});
    } catch (error) {
        console.log("error in signup", error.message);
        res.status(500).json({ message: "Error creating user", error });
    }
}


// Login
export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        if(!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = generateToken(user._id);

        return res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        console.log("error in login", error.message);
        res.status(500).json({ message: "Error logging in", error });
    }
}


// CheckAuth of User
export const checkAuth = async (req, res) => {
    return res.status(200).json({ message: "User is authenticated", user: req.user });
}


// User profile update
export const updateProfile = async (req, res) => {
    try {
        const { fullName, bio, profilePic } = req.body;

        const useId = req.user._id;
        let updatedUser;

        // update if profilePic is provided
        if(!profilePic){
           updatedUser = await User.findByIdAndUpdate(useId, { fullName, bio }, { new: true });
        }else{
            const upload = await cloudinary.uploader.upload(profilePic)

            updatedUser = await User.findByIdAndUpdate(useId, { fullName, bio, profilePic: upload.secure_url }, { new: true });
        }

        return res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.log("error in updateProfile", error.message);
        res.status(500).json({ message: "Error updating profile", error }); 
    }
}