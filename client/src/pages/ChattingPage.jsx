import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatSection from "../components/ChatSection";
import RightSidebar from "../components/RightSidebar";

const ChattingPage = () => {
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className="w-full h-screen p-5">
      <div
        className={`backdrop-blur overflow-hidden h-full grid grid-cols-1 relative ${
          selectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        } `}
      >
        <Sidebar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <ChatSection
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        {selectedUser && (
          <RightSidebar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        )}
      </div>
    </div>
  );
};

export default ChattingPage;
