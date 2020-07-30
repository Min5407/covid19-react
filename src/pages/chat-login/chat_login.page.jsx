import React, { useEffect } from "react";
import "./chat_login.style.scss";
import { signInWithGoogle, signInWithFB, auth } from "../../firebase/firebase";
import FacebookIcon from "@material-ui/icons/Facebook";
import { FcGoogle } from "react-icons/fc";

const ChatLoginPage = ({ setUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      } else {
        setUser(null);
      }
    });

    //  return () => {
    //    unsub();
    //  };
  }, [setUser]);

  return (
    <div className="loginPage">
      <h1>
        <span>Let's Talk</span>
      </h1>
      <h3>- Please Log in to enter the chat -</h3>
      <div className="loginBtn">
        <FcGoogle onClick={signInWithGoogle} />
        <FacebookIcon style={{ color: "#4267B2" }} onClick={signInWithFB} />
      </div>
    </div>
  );
};

export default ChatLoginPage;
