import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { EllipsisVertical, Search } from "lucide-react";

const userDummyData = [
  {
    fullName: "Alice Johnson",
    profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    fullName: "Bob Smith",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    fullName: "Clara Evans",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    fullName: "Daniel Lee",
    profilePic: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    fullName: "Eva Brown",
    profilePic: "", // This will trigger fallback image
  },
];

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#8185B2]/20 h-full p-5 rounded-l-2xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10" />
              <h4 className="font-bold text-3xl text-violet-500">Talky</h4>
            </div>
            <div className="relative py-2 group">
              <EllipsisVertical className="max-h-5 cursor-pointer text-black" />
              <div className="absolute right-0 top-full z-10 w-32 px-5 py-3 rounded-md bg-violet-600 hidden group-hover:block">
                <p
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer text-sm hover:text-violet-300"
                >
                  Edit profile
                </p>
                <hr className="my-2 border-t border-gray-200" />
                <p className="cursor-pointer text-sm hover:text-violet-300">
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* search */}
        <div className="bg-[#8185B2]/50 rounded-full flex items-center gap-2 p-3 mt-5">
          <Search className=" size-6 cursor-pointer text-charcoal" />
          <input
            type="text"
            placeholder="Search User....."
            className="bg-transparent outline-none border-none text-gray-700 text-sm placeholder:text-gray-700 flex-1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {userDummyData.map((user, i) => (
          <div
            onClick={() => setSelectedUser(user)}
            key={i}
            className={`relative flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200
           hover:bg-violet-500/30 ${selectedUser?._id === user._id ? "bg-[#8185B2]/50" : ""}`}
          >
            <img
              src={
                user?.profilePic ||
                "https://c1.klipartz.com/pngpicture/314/450/sticker-png-circle-user-profile-avatar-computer-program-symbol-oval.png"
              }
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex flex-col justify-center leading-tight">
              <p className="font-medium text-gray-100">{user.fullName}</p>
              <span
                className={`text-xs ${
                  i < 3 ? "text-green-300" : "text-gray-600"
                }`}
              >
                {i < 3 ? "Online" : "Offline"}
              </span>
            </div>

            {i > 2 && (
              <p className="absolute top-auto right-3 text-xs w-5 h-5 flex justify-center items-center rounded-full bg-violet-500/50 text-white">
                {i}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
