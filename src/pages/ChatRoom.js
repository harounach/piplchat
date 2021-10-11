import React from "react";
import Logo from "../logo.svg";

import Message from "../components/Message";
import { chatData } from "../data";

// firebase
import { useAuth, useFirebaseApp } from "reactfire";

const ChatRoom = () => {
  const firebaseApp = useFirebaseApp();
  const auth = useAuth(firebaseApp);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <header className="w-full h-20 flex items-center justify-between px-4 bg-indigo-900 mb-4">
        <div>
          <img className="w-20" src={Logo} alt="Logo" />
        </div>
        <button
          className="px-4 py-2 bg-yellow-400 rounded-md shadow-md"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </header>
      <main className="w-full flex-grow flex justify-center items-start p-2">
        <div className="w-8/12 shadow-md bg-white rounded-lg p-4 flex flex-col items-center gap-4">
          {chatData.map((messageEntry) => {
            return (
              <Message
                key={messageEntry.id}
                message={messageEntry.message}
                recepient={messageEntry.isRecepient}
              />
            );
          })}
        </div>
      </main>
      <div className="flex justify-center p-4 bg-indigo-900">
        <form action="" className="w-6/12 flex">
          <input
            type="text"
            className="px-4 py-2 bg-white rounded-md shadow-md flex-grow w-24"
          />
          <button className="px-4 py-2 ml-2 bg-yellow-400 rounded-md shadow-md ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
