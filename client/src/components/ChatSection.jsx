import { useEffect, useRef } from "react";
import { ImagePlus, Info, Send } from "lucide-react";
import { formatTime } from "../libs/utils";

const messagesDummyData = [
  {
    senderId: "680ef663884h2424", // Logged-in user
    text: "Hey Martin, how are you?",
    createdAt: "2025-07-20 10:32 AM",
  },
  {
    senderId: "martin123", // Other user
    text: "Hey! I’m good, just working on the project. You?",
    createdAt: "2025-07-20 10:33 AM",
  },
  {
    senderId: "680ef663884h2424",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    createdAt: "2025-07-20 10:35 AM",
  },
  {
    senderId: "martin123",
    text: "Looks great! Let’s finalize that.",
    createdAt: "2025-07-20 10:36 AM",
  },
  {
    senderId: "680ef663884h2424",
    text: "Awesome, I’ll submit it now.",
    createdAt: "2025-07-20 10:37 AM",
  },
];

const ChatSection = ({ selectedUser }) => {
  const scrollEnd = useRef(null);

  useEffect(() => {
    scrollEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return selectedUser ? (
    <div className="px-5 py-3 bg-[#8185B2]/30 h-full overflow-y-scroll relative rounded">
      {/* Header */}
      <div className="flex items-center gap-3 py-4 border-b border-stone-500">
        <img
          src="https://c1.klipartz.com/pngpicture/314/450/sticker-png-circle-user-profile-avatar-computer-program-symbol-oval.png"
          alt="profile"
          className="w-8 rounded-full"
        />
        <p className="flex-1 text-lg text-charcoal font-bold flex items-center gap-2">
          Martin John
          <div className="w-2 h-2 rounded-full bg-green-300 inline-block" />
        </p>
        <Info className="size-6 cursor-pointer my-auto text-charcoal" />
      </div>

      {/* Chat messages */}
      <div className="flex flex-col gap-3 text-charcoal h-full overflow-y-scroll p-4 pb-6">
        {messagesDummyData.map((msg, i) => {
          const isMe = msg.senderId === "680ef663884h2424";
          return (
            <div
              key={i}
              className={`flex gap-2 ${
                isMe ? "flex-row-reverse self-end" : "flex-row self-start"
              }`}
            >
              {/* Avatar */}
              <img
                src={
                  isMe
                    ? "https://randomuser.me/api/portraits/women/68.jpg"
                    : "https://c1.klipartz.com/pngpicture/314/450/sticker-png-circle-user-profile-avatar-computer-program-symbol-oval.png"
                }
                alt="avatar"
                className="w-7 h-7 rounded-full self-end"
              />

              {/* Message + Time */}
              <div
                className={`flex flex-col ${
                  isMe ? "items-end" : "items-start"
                }`}
              >
                {msg.image ? (
                  <img
                    src={msg.image}
                    alt="message-img"
                    className="max-w-[240px] rounded-lg overflow-hidden border border-gray-600"
                  />
                ) : (
                  <p
                    className={`p-3 rounded-lg max-w-[300px] text-white text-sm ${
                      isMe
                        ? "bg-violet-600 rounded-br-none"
                        : "bg-violet-500 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </p>
                )}
                <span className="text-xs text-gray-600 mt-1">
                  {formatTime(msg.createdAt)}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={scrollEnd}></div>
      </div>

      {/* Input area */}
      <div className="absolute bottom-0 left-0 right-0 px-8 py-4 flex items-center gap-3">
        <div className="flex-1 flex items-center bg-violet-500/50 rounded-full px-3">
          <input
            type="text"
            placeholder="Type message..."
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder:text-white"
          />
          <input type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor="image">
            <ImagePlus className="size-6 cursor-pointer text-white mr-2" />
          </label>
        </div>
        <div className="flex items-center gap-2 bg-violet-500/50 hover:bg-violet-600 transition cursor-pointer rounded-full p-2">
          <Send className="size-6 cursor-pointer text-white" />
        </div>
      </div>
    </div>
  ) : (
    // Empty state
    <div className="flex flex-col items-center justify-center h-full gap-3 max-md:hidden">
      <img src="./src/assets/logo.png" alt="logo" className="max-w-26" />
      <p className="text-charcoal text-2xl font-semibold">
        Feel free to chat anytime, anywhere.
      </p>
    </div>
  );
};

export default ChatSection;