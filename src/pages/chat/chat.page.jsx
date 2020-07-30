import React, { useState, useEffect } from "react";
import "./chat.style.scss";
import { auth } from "../../firebase/firebase";
import ChatLoginPage from "../chat-login/chat_login.page";
const Chat = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user && <ChatLoginPage setUser={setUser} />}

      {user && <button onClick={() => auth.signOut()}> sign</button>}
    </div>
  );
};

export default Chat;
