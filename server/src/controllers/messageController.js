import Message from "../models/Message.js";
import User from "../models/User.js";
import cloudinary from "../utils/cloudinary.js";

// Get all Logged in Users
export const getUserForSidebar = async (req, res) => {
    try {
        const userId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: userId } }).select("-password")

        // number of Unseen messages
        const unseenMessages = {}
        const promises = filteredUsers.map(async (user) => {
            const messages = await Message.find({ senderId: user._id, receiverId: userId, seen: false })
            if(messages.length > 0){
                unseenMessages[user._id] = messages.length
            }
        })

        await Promise.all(promises)
        return res.status(200).json({ users: filteredUsers, unseenMessages })

    } catch (error) {
        console.log("error in getUserForSidebar", error.message);
        res.status(500).json({ message: "Error getting users", error });
    }
}


// Get all messages of selected user
export const getAllMessages = async (req, res) => {
    try {

        const {id:selectedUserId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or:[
                {senderId: myId, receiverId: selectedUserId},
                {senderId: selectedUserId, receiverId: myId}
            ]
        })

        await Message.updatedMany({senderId: selectedUserId, receiverId: myId},{seen: true});
        return res.status(200).json({ messages })
        
    } catch (error) {
        console.log("error in getAllMessages", error.message);
        res.status(500).json({ message: "Error getting messages", error });
    }
}



// api to mark message as seen using messageId
export const markMessageAsSeen = async (req, res) => {
    try {
        const {id} = req.params;
        await Message.findByIdAndUpdate(id, {seen: true});

        return res.status(200).json({ message: "Message marked as seen" })

    } catch (error) {
        console.log("error in markMessageAsSeen", error.message);
        res.status(500).json({ message: "Error marking message as seen", error });
    }
}



// Send message to selected user
export const sendMessage = async (req, res) => {
    try {
        
        const {text, image} = req.body;
        const senderId = req.user._id;
        const receiverId = req.params.id;

        let imageUrl

        if(image){
            const upload = await cloudinary.uploader.upload(image)
            imageUrl = upload.secure_url
        }

        const newMessage = Message.create({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })

    } catch (error) {
        console.log("error in sendMessage", error.message);
        res.status(500).json({ message: "Error sending message", error });
    }
}