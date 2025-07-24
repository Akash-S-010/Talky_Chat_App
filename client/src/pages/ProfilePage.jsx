import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState("Martin Johnson");
  const [bio, setBio] = useState("Hi Everyone, I am Using QuickChat");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here...
    console.log({ name, bio, selectedImg });
    navigate("/chat"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center backdrop-blur-md text-charcoal">
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white/50 bg-opacity-20 border-2 border-violet-300 rounded-xl p-8 shadow-lg gap-8">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 gap-6 justify-center"
        >
          <h2 className="text-xl font-semibold">Profile details</h2>

          <label htmlFor="avatar" className="flex items-center gap-4 cursor-pointer">
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : "https://c1.klipartz.com/pngpicture/314/450/sticker-png-circle-user-profile-avatar-computer-program-symbol-oval.png"
              }
              alt="Profile"
              className="w-14 h-14 rounded-full border-2 border-white"
            />
            <span className="text-sm text-charcoal">Upload profile image</span>
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border-2 border-violet-300 focus:outline-none focus:border-violet-500 p-2 rounded-md text-charcoal placeholder:text-gray-200"
            placeholder="Enter your name"
          />

          <textarea
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="bg-transparent border-2 border-violet-300 focus:outline-none focus:border-violet-500 p-2 rounded-md text-charcoal placeholder:text-gray-200"
            placeholder="Enter your bio"
          />

          <button
            type="submit"
            className="mt-4 bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-full hover:scale-102 transition cursor-pointer"
          >
            Save
          </button>
        </form>

        <div className="flex items-center justify-center">
          <img src={logo} alt=""  className="w-28"/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
