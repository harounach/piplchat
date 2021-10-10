import React from "react";
import classNames from "classnames";

const Message = ({ recepient, message }) => {
  const avatarClasses = classNames(
    "w-14",
    "h-14",
    "bg-blue-400",
    "rounded-full",
    "flex",
    "justify-center",
    "items-center",
    "flex-shrink-0",
    { "mr-2": !recepient },
    { "ml-2": recepient }
  );

  const messageRowClasses = classNames("flex", {
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
      <div className={avatarClasses}>H</div>
      {/* Message */}
      <p className={messageClasses}>{message}</p>
    </div>
  );
};

export default Message;
