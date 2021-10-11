import React from "react";
import classNames from "tailwindcss-classnames";

const Message = ({ recepient, messageEntry }) => {
  const avatarClasses = classNames(
    "w-14",
    "h-14",
    "bg-blue-400",
    "rounded-full",
    "flex",
    "justify-center",
    "items-center",
    "flex-shrink-0",
    "overflow-hidden",
    { "mr-2": !recepient },
    { "ml-2": recepient }
  );

  const messageRowClasses = classNames("flex", "w-full", {
    "flex-row-reverse": recepient,
  });

  const messageClasses = classNames(
    { "bg-blue-200": !recepient },
    { "bg-gray-200": recepient },
    "p-2 rounded-lg"
  );

  return (
    <div className={messageRowClasses}>
      {/* avatar */}
      <div className={avatarClasses}>
        <img src={messageEntry.photoURL} alt={messageEntry.name + " Photo"} />
      </div>
      {/* Message */}
      <p className={messageClasses}>{messageEntry.message}</p>
    </div>
  );
};

export default Message;
