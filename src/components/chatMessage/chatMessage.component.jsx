import React from "react";
import "./chatMessage.style.scss";
import Avatar from "@material-ui/core/Avatar";

const ChatMessage = ({ data: { message, url, user }, currentUser }) => {
  let isCurrentUser;
  if (user === currentUser) {
    isCurrentUser = true;
  }

  return (
    <div className={isCurrentUser ? "chatMessage chatMessageR" : "chatMessage"}>
      <div className="avatar">
        <Avatar>{user[0]}</Avatar>
      </div>

      <div className={isCurrentUser ? " message-right" : "message-left"}>
        {url && <img src={url} width="200px" height="200px" alt="NoImage" />}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
