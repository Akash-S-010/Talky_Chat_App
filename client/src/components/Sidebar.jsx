import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { EllipsisVertical, Search } from "lucide-react";

const Sidebar = ({ selectedUser }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#8185B2]/20 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10" />
              <h4 className="font-bold text-3xl text-primary">Talky</h4>
            </div>
            <div className="relative py-2 group">
              <EllipsisVertical className="max-h-5 cursor-pointer text-black" />
              <div className="absolute right-0 top-full z-10 w-32 px-5 py-3 rounded-md bg-[#fd7f90f1] hidden group-hover:block">
                <p
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer text-sm hover:text-charcoal"
                >
                  Edit profile
                </p>
                <hr className="my-2 border-t border-gray-200" />
                <p className="cursor-pointer text-sm hover:text-charcoal">
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* search */}
        <div className="bg-[#8185B2]/30 rounded-full flex items-center gap-2 p-3 mt-5">
          <Search className=" size-6 cursor-pointer text-charcoal" />
          <input
            type="text"
            placeholder="Search User....."
            className="bg-transparent outline-none border-none text-gray-700 text-sm placeholder:text-gray-700 flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
