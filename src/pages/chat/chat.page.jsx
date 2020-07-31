import React, { useState, useEffect } from "react";
import "./chat.style.scss";
import ChatLoginPage from "../chat-login/chat_login.page";
import ChatBox from "../../components/chatBox/chatBox.component";

const Chat = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="chatPage">
      {!user && <ChatLoginPage setUser={setUser} />}
      {user && <ChatBox user={user} />}
    </div>
  );
};

export default Chat;
