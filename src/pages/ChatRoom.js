import React from "react";
import Logo from "../logo.svg";

import Message from "../components/Message";

const ChatRoom = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <header className="w-full h-20 flex items-center justify-between px-4 bg-indigo-900 mb-4">
        <div>
          <img className="w-20" src={Logo} alt="Logo" />
        </div>
        <button className="px-4 py-2 bg-yellow-600 rounded-md shadow-md">
          Logout
        </button>
      </header>
      <main className="w-full flex-grow flex justify-center items-start p-2">
        <div className="w-8/12 shadow-md bg-white rounded-lg p-4 flex flex-col items-center gap-4">
          {/* chat row sender */}
          <Message
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos a
          voluptatem harum iure recusandae, quis neque perspiciatis tempore"
          />

          {/* chat row recepient */}
          <Message
            recepient
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos"
          />
          {/* chat row sender */}
          <Message
            message="architecto temporibus! Architecto atque neque nostrum consequatur
          consectetur quam unde eveniet?"
          />
          {/* chat row recepient */}
          <Message
            recepient
            message="quis neque perspiciatis tempore
          architecto temporibus! Architecto"
          />
        </div>
      </main>
      <div className="flex justify-center p-4 bg-indigo-900">
        <form action="" className="w-6/12 flex">
          <input
            type="text"
            className="px-4 py-2 bg-white rounded-md shadow-md flex-grow w-24"
          />
          <button className="px-4 py-2 ml-2 bg-yellow-600 rounded-md shadow-md ">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
