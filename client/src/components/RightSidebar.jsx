import React, { useEffect, useRef } from "react";

const imagesDummyData = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
];

const RightSidebar = ({ selectedUser }) => {
    const scrollEnd = useRef(null);

    useEffect(() => {
      scrollEnd.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

  return (
    selectedUser && (
      <div
        className={`bg-[#8185B2]/20 rounded-r-2xl w-full relative overflow-y-scroll ${
          selectedUser ? "max-md:hidden" : ""
        }`}
      >
        <div className="pt-6 flex flex-col items-center gap-2 text-xs font-light mx-auto">
          <img
            src={
              selectedUser.profilePic ||
              "https://c1.klipartz.com/pngpicture/314/450/sticker-png-circle-user-profile-avatar-computer-program-symbol-oval.png"
            }
            alt="profile"
            className="w-20 aspect[1/1] rounded-full"
          />
          <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2 text-charcoal">
            <p className="w-2 h-2 rounded-full bg-green-300"></p>
            {selectedUser.fullName}
          </h1>
          <p className="px-10 mx-auto">{selectedUser.bio}</p>
        </div>

        <hr className="border border-gray-400 my-4" />
        <div className="px-5 text-sm">
          <p>Media</p>
          <div className="mt-2 max-h-[400px] grid grid-cols-2 gap-4 opacity-80 overflow-y-scroll" ref={scrollEnd}>
            {imagesDummyData.map((url, i) => (
              <div
                key={i}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded"
              >
                <img src={url} alt="img" className="h-full rounded-md" />
              </div>
            ))}
          </div>
        </div>
        <button className="absolute bottom-5 w-1/2 py-2 left-1/2 transform -translate-x-1/2 bg-violet-500 hover:bg-violet-600 text-white font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:scale-102 transition-all duration-300 cursor-pointer">
          Logout
        </button>
      </div>
    )
  );
};

export default RightSidebar;
