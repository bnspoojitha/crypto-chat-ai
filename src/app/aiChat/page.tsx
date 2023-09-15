import React from "react";
import Image from "next/image";
import Link from "next/link";

const ChatPage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-opacity-50 bg-black">
        <div className="bg-opacity-70 bg-white p-6 rounded-lg w-96">
          {/* Chat prompts and responses */}
          <div className="h-60 overflow-y-auto">
            {/* Display chat prompts and responses */}
          </div>

          {/* Input box and submit button */}
          <div className="flex">
            <input
              type="text"
              className="flex-grow rounded-l-lg border border-gray-300 p-2"
              placeholder="Type your message..."
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
