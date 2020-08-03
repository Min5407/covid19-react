import React, { useRef, useState, useEffect } from "react";
import "./chatTextfield.style.scss";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import ChatMessage from "../chatMessage/chatMessage.component";
import ImageProgressBar from "../imageProgress/imageProgress.component";
import UploadMessage from "./firebase.api";

const ChatTextField = ({ user }) => {
  const [message, setMessage] = useState("");
  const [inputState, setInputState] = useState(true);
  const [image, setImage] = useState(null);
  const [fullMessage, setFullMessage] = useState(null);
  // const [fullMessageState, setFullMessageState] = useState(false);

  useEffect(() => {
    if (message !== "" || image) {
      setInputState(false);
    } else if (message === "" && !image) {
      setInputState(true);
    }
  }, [message, image]);

  const handleFileInputClick = () => {
    inputFileRef.current.click();
  };

  const inputMessage = (e) => {
    setMessage(e.target.value);
  };

  const setFile = (event) => {
    setImage(event.target.files[0]);
  };

  const sendMessage = () => {
    const data = { user: user, message: message, image: image };
    setFullMessage(data);

    setMessage("");
    setImage(null);
  };

  const inputFileRef = useRef(null);

  return (
    <div className="chatTextField">
      {fullMessage && (
        <ImageProgressBar
          fullMessage={fullMessage}
          setFullMessage={setFullMessage}
        />
      )}

      <input
        style={{ display: "none" }}
        onChange={setFile}
        type="file"
        accept="image/*"
        ref={inputFileRef}
      />
      <div className="textField">{fullMessage && <ChatMessage />}</div>
      <div className="input">
        <IconButton onClick={handleFileInputClick} aria-label="add">
          <AddIcon />
        </IconButton>
        <input
          name={message}
          value={message}
          onChange={inputMessage}
          type="text"
        ></input>
        <div>
          <Button
            disabled={inputState}
            color="primary"
            variant="contained"
            endIcon={<SendIcon />}
            onClick={sendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatTextField;
