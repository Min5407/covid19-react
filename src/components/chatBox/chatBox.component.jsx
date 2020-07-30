import React from "react";
import "./chatBox.style.scss";
import { auth } from "../../firebase/firebase";
import ChatTextField from "../../components/chatTextfield/chatTextField.component";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const ChatBox = ({ user }) => {
  return (
    <div className="chatBox">
      <div className="chat-header">
        <div className="user">
          <Avatar style={{ background: "plum", color: "white" }} />
          <h3> {user}</h3>
        </div>
        <div className="btn">
          <Button
            startIcon={<ExitToAppIcon />}
            variant="contained"
            style={{ background: "plum", color: "white" }}
            onClick={() => auth.signOut()}
          >
            Log Out
          </Button>
        </div>
      </div>

      <ChatTextField />
    </div>
  );
};

export default ChatBox;
