import React from "react";

const Message = ({ recepient, messageEntry }) => {
  const senderView = (
    <div className="flex w-full items-start">
      {/* avatar */}
      <div className="w-14 h-14 bg-blue-400 rounded-full flex justify-center items-center flex-shrink-0 overflow-hidden mr-2">
        <img src={messageEntry.photoURL} alt={messageEntry.name + " Photo"} />
      </div>
      {/* Message */}
      <p className="bg-blue-200 px-4 py-2 mt-2 rounded-lg">
        {messageEntry.message}
      </p>
    </div>
  );

  const recepientVeiw = (
    <div className="flex w-full flex-row-reverse items-start ">
      {/* avatar */}
      <div className="w-14 h-14 bg-blue-400 rounded-full flex justify-center items-center flex-shrink-0 overflow-hidden ml-2">
        <img src={messageEntry.photoURL} alt={messageEntry.name + " Photo"} />
      </div>
      {/* Message */}
      <p className="bg-gray-200 px-4 py-2 mt-2 rounded-lg">
        {messageEntry.message}
      </p>
    </div>
  );

  const messageView = recepient ? recepientVeiw : senderView;

  return messageView;
};

export default Message;
